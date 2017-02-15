package {
	import flash.display.Sprite;
	import flash.display.StageAlign;
	import flash.display.StageQuality;
	import flash.display.StageScaleMode;
	import flash.events.Event;
	import flash.external.ExternalInterface;
	import starling.core.Starling;
	import net.hires.debug.Stats;

	/**
	 * BetweenAS3の検証デモです。
	 * @author Yasunobu Ikeda
	 */
	[SWF(width = "800", height = "800", frameRate = "60", backgroundColor = 0x000000)]
	public class FlashTweenMax extends Sprite {

		public function FlashTweenMax() {

			// パラメーターの取得
			if(ExternalInterface.available){
				const url = ExternalInterface.call("function() { console.log(location.href); return location.href; }")
				Game.numParticles = Number(url.split("?").pop()) || 1000;
			}
		
			// スターリンの初期化
			var starling: Starling = new Starling(Game, stage);
			starling.showStatsAt("right", "top", 2); // ドローコールを表示
			starling.start();

			// スタッツを表示
			this.addChild(new Stats());

			this.setupStage();
		}

		private function setupStage(): void {
			stage.quality = StageQuality.LOW;
			stage.scaleMode = StageScaleMode.NO_SCALE;
			stage.align = StageAlign.TOP_LEFT;
		}
	}
}

import starling.display.Sprite;
import starling.textures.Texture;
import starling.display.Quad;
import flash.display.BitmapData;
import com.greensock.TweenMax;
import com.greensock.easing.Cubic;

internal class Game extends Sprite {
	internal static var numParticles: uint = 1000;

	public function Game() {
		this.setupParticles();
	}

	private function setupParticles(): void {

		var bmd = new BitmapData(1, 1, false, 0xFFFFFFFF);
		var texture = Texture.fromBitmapData(bmd);

		var p: Quad = null;
		var a: Number, dx: Number, dy: Number;
		var i: int = numParticles;
		while (--i >= 0) {


			a = Math.random() * Math.PI * 2;
			dx = Math.cos(a) * 400 * 1.4 + 400;
			dy = Math.sin(a) * 400 * 1.4 + 400;

			p = Quad.fromTexture(texture);
			p.x = 400;
			p.y = 400;
			
			var sec = (1.5 + Math.random() * 4.5);

			TweenMax.to(p, sec, {x: dx, y: dy, repeat: -1, ease: Cubic.easeIn});
			
			this.addChild(p);
		}
	}

}