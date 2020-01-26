import { Sprite, TextureLoader } from '../core';

import config from './sprite.config';

export interface MapNameToId {
  [name: string]: string;
}

export interface MapNameToSprite {
  [name: string]: Sprite;
}

export class SpriteFactory {
  public static asOne(
    id: string,
    targetDims = new Sprite.Dimensions(),
  ): Sprite {
    const spriteConfig = config[id];
    if (spriteConfig === undefined) {
      throw new Error(`Invalid sprite id = "${id}"`);
    }

    const [imagePath, ...textureRectValues] = spriteConfig;

    const texture = TextureLoader.load(imagePath);
    const textureRect = new Sprite.Rect(...textureRectValues);
    const sprite = new Sprite(texture, textureRect, targetDims);

    return sprite;
  }

  public static asMap(mapNameToId: MapNameToId): MapNameToSprite {
    const mapNameToSprite = {};

    Object.keys(mapNameToId).forEach((name) => {
      const id = mapNameToId[name];
      const sprite = SpriteFactory.asOne(id);

      mapNameToSprite[name] = sprite;
    });

    return mapNameToSprite;
  }

  public static asList(ids: string[]): Sprite[] {
    const sprites = ids.map((id) => {
      const sprite = SpriteFactory.asOne(id);

      return sprite;
    });

    return sprites;
  }
}