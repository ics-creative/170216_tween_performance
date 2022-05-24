const STAGE_WIDTH = 800;
const STAGE_HEIGHT = 600;

export const createParticles = () => {
  const numParticles = Number(location.href.split("?")[1]) || 500;
  const particles = [];
  const container = document.querySelector("#container");
  for (let i = 0; i < numParticles; i++) {
    const p = document.createElement("div");
    container.appendChild(p);

    p.classList.add("dot");
    p.style.left = STAGE_WIDTH / 2 + "px";
    p.style.top = STAGE_HEIGHT / 2 + "px";

    particles.push(p);
  }
  return particles;
};

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
