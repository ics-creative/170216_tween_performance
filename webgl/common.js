const STAGE_WIDTH = 800;
const STAGE_HEIGHT = 800;

/**
 * 検証用のPixiJSのステージを作成します。
 */
export class Main {
  constructor() {
    this.NUM_PARTICLES = Number(location.href.split("?")[1]) || 10000;

    const app = new PIXI.Application({
      width: STAGE_WIDTH,
      height: STAGE_HEIGHT,
    });
    this.app = app;
    // Create a Pixi stage and renderer
    document.body.appendChild(this.app.renderer.view);

    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 1, 1);

    const texture = PIXI.Texture.from(canvas);

    const particles = [];

    for (let i = 0; i < this.NUM_PARTICLES; i++) {
      const p = new PIXI.Sprite(texture);

      // init position
      p.x = STAGE_WIDTH / 2;
      p.y = STAGE_HEIGHT / 2;

      this.app.stage.addChild(p);
      particles.push(p);
    }
    this.particles = particles;
  }
}

/**
 * パーティクルのランダムなトゥイーン位置と時間を作成します。
 * @author IKEDA Yasunobu
 * @since 2022-04-22
 */
export const createRandomFromTo = () => {
  const a = Math.random() * Math.PI * 2;
  const dx = ((Math.cos(a) * STAGE_WIDTH) / 2) * 1.4 + STAGE_WIDTH / 2;
  const dy = ((Math.sin(a) * STAGE_HEIGHT) / 2) * 1.4 + STAGE_HEIGHT / 2;

  const duration = 1.5 + Math.random() * 4.5;

  return {
    from: {
      x: STAGE_WIDTH / 2,
      y: STAGE_HEIGHT / 2,
    },
    to: {
      x: dx,
      y: dy,
    },
    duration,
  };
};
