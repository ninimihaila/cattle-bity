import {
  GameObject,
  GameObjectUpdateArgs,
  RectRenderer,
  SpriteFont,
  SpriteFontConfig,
  SpriteTextRenderer,
  Text,
} from '../core';
import { ConfigParser } from '../ConfigParser';
import { SpriteFontConfigSchema } from '../font';
import * as config from '../config';

// TODO: use loader
import * as fontJSON from '../../data/fonts/sprite-font.json';

export class StageSelectionScene extends GameObject {
  public setup({ textureLoader }: GameObjectUpdateArgs): void {
    this.renderer = new RectRenderer(config.BACKGROUND_COLOR);

    const fontConfig = ConfigParser.parse<SpriteFontConfig>(
      fontJSON,
      SpriteFontConfigSchema,
    );

    const texture = textureLoader.load('data/fonts/sprite-font.png', true);
    const font = new SpriteFont(fontConfig, texture);
    const text = new Text('HEY MAN HOW IT IS GOING\nBRO', font, {
      scale: 4,
    });

    const textRenderer = new SpriteTextRenderer(text);

    const stageText = new GameObject(text.getWidth(), text.getHeight());
    stageText.renderer = textRenderer;

    this.add(stageText);
  }
}
