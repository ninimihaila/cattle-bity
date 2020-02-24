import { GameObject, GameObjectUpdateArgs, SpriteRenderer } from '../core';

export class GameOverNotice extends GameObject {
  public readonly renderer = new SpriteRenderer();

  constructor() {
    super(124, 60);
  }

  protected setup({ spriteLoader }: GameObjectUpdateArgs): void {
    this.renderer.sprite = spriteLoader.load('ui.gameOver');
  }
}
