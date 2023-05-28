import {
  Group,
  SpotLight,
  PointLight,
  AmbientLight,
  HemisphereLight,
} from "three";

export default class BasicLights extends Group {
  constructor(...args) {
    super(...args);

    // 从一个点向各个方向发射的光源。一个常见的例子是模拟一个灯泡发出的光。
    const point = new PointLight(0xffffff, 1, 10, 1);
    // 光线从一个点沿一个方向射出，随着光线照射的变远，光线圆锥体的尺寸也逐渐增大。
    const dir = new SpotLight(0xffffff, 0.8, 7, 0.8, 1, 1);
    // 环境光会均匀的照亮场景中的所有物体。环境光不能用来投射阴影，因为它没有方向。
    const ambi = new AmbientLight(0x404040, 0.66);
    // 光源直接放置于场景之上，光照颜色从天空光线颜色渐变到地面光线颜色。半球光不能投射阴影。
    const hemi = new HemisphereLight(0xffffbb, 0x080820, 1.15);

    dir.position.set(5, 1, 2);
    dir.target.position.set(0, 0, 0);

    point.position.set(0, 1, 5);
    point.intensity = 0.5;

    this.add(point, ambi, hemi, dir);
  }
}
