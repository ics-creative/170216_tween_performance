# アニメーションライブラリ比較

## 検証方法について

無数のドットに対してトゥイーンエンジンで移動するように設定しています。ドットの数が増えれば、アニメーションの制御対象が増えるため負荷が増大します。トゥイーンアニメーションの性能がよければ、制御対象が増えても負荷が増加しにくいため、これを性能評価に使いました。


## WebGLについて

デモURL

https://ics-creative.github.io/170216_tween_performance/webgl/

描画対象はWebGLとして、制御にPixi.js v4を使っています。DOM制御のためのアニメーションライブラリであるjQueryやVelocity.jsは、WebGLの制御に使えなかったため、今回の検証の対象から外しています。検証のコードは、BetweenAS3の検証方式にあわせています（参照「[BetweenAS3 Performance Comparison Demo](http://www.be-interactive.org/works/20090428/Particle/index.html)」）。



## DOMについて

デモURL

https://ics-creative.github.io/170216_tween_performance/dom/

`position:absolute`を設定した`div`要素をアニメーションさせています。
