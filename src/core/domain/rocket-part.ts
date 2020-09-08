import { DrawingCoord } from './DrawingCoord';
import { PartType } from './part-types';

export abstract class RocketPart {
  constructor(name: string) {
    this.setName(name);
    this.cacheId = Guid.newGuid();
  }

  copy(right: RocketPart) {
    const newOrigin = new DrawingCoord(
      right.getOrigin().x,
      right.getOrigin().y
    );
    this.setOrigin(newOrigin);
    this.parent = right.parent;
    this.children = right.children;
    this.id = right.id;
  }

  public id = Guid.newGuid();

  // Tree Properties
  public parent: RocketPart;
  public children: RocketPart[] = [];

  public addChild(child: RocketPart): void {
    this.children.push(child);
    child.parent = this;
    child.setOrigin(this.connectionPoint);
    if (this.parent) {
      this.parent.updateOrigin();
    }
  }
  public deleteChild(child: RocketPart): void {
    let index = this.children.indexOf(child);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }
  public replaceChild(oldChild: RocketPart, newChild: RocketPart): void {
    newChild.copy(oldChild);
    this.deleteChild(oldChild);
    this.addChild(newChild);
    for (let index = 0; index < newChild.children.length; index++) {
      newChild.children[index].parent = newChild;
    }
  }

  // Name Properties
  protected name: string;
  public setName(newname: string) {
    this.name = newname;
  }
  public getName(): string {
    return this.name;
  }

  // Type Properties
  protected partType: PartType;
  public getPartType(): PartType {
    return this.partType;
  }

  // origin Properties
  protected origin: DrawingCoord = DrawingCoord.DrawingOrigin;
  public setOrigin(newOrigin: DrawingCoord) {
    this.origin = newOrigin;
    this.clearCache();
  }
  public getOrigin(): DrawingCoord {
    return this.origin;
  }
  public updateOrigin() {
    if (this.parent == null) {
      return;
    }
    this.setOrigin(this.parent.getConnectionPoint());
    for (let index = 0; index < this.children.length; index++) {
      const element = this.children[index];
      element.updateOrigin();
    }
  }

  // connection point Properties
  protected connectionPoint: DrawingCoord;
  public setConnectionPoint(newConnectionPoint: DrawingCoord) {
    this.connectionPoint = newConnectionPoint;
    this.clearCache();
  }
  public getConnectionPoint(): DrawingCoord {
    return this.connectionPoint;
  }

  public abstract getCenterOfMass(): DrawingCoord;
  public abstract getCenterOfPressure(): DrawingCoord;

  protected cache: { [key: string]: number } = {};
  public cacheId: string = '';

  protected clearCache(): void {
    this.cache = {};
    this.cacheId = Guid.newGuid();
  }
}

class Guid {
  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
