import MultichainMemecoinCard from "../components/MultichainMemecoinCard";
import styles from "./Terminal.module.css";
import { useEffect } from "react";
import {
  useLocation,
} from "react-router-dom";

import * as PIXI from "pixi.js";
import { Live2DModel } from "pixi-live2d-display/cubism4";
window.PIXI = PIXI;

Live2DModel.registerTicker(PIXI.Ticker);
// register InteractionManager to make Live2D models interactive
PIXI.Renderer.registerPlugin("interaction", PIXI.InteractionManager);

const Terminal = () => {
  
  const location = useLocation();
  

  useEffect(() => {
    const app = new PIXI.Application({
      view: document.getElementById("canvas"),
      autoStart: true,
      resizeTo: window,
    });

    Live2DModel.from("public/resources/GirlCharacter/mao_pro_t02.model3.json", {
      idleMotionGroup: "Idle",
    }).then((model) => {
      app.stage.addChild(model);
      model.anchor.set(0.5, 0.5);
      model.position.set(window.innerWidth / 2, window.innerHeight / 2);
      model.scale.set(0.09, 0.09);

      model.on("pointertap", () => {
        model.motion("Tap@Body");
      });
    });
  }, []);

  return (
    <div className={styles.terminal}>
      <div className={styles.header14Wrapper}>
        <div className={styles.header14}>
          <div className={styles.placeholderLightbox}>
            <div className={styles.playButton} />
            <div className={styles.navbar}>
              <div className={styles.column}>
                <img className={styles.omnicatIcon} alt="" src="/omnicat.svg" />
              </div>
              <div className={styles.column1}>
                <b className={styles.link1}>Mission</b>
                <b className={styles.link1}>Terminal</b>
                <b className={styles.link1}>Ecosystem</b>
                <b className={styles.link1}>Statistics</b>
              </div>
              <div className={styles.column2}>
                <div className={styles.vectorParent}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/subtract.svg"
                  />
                </div>
              </div>
            </div>
            

            <div className={styles.frameParent}>
            <div>
              <div className={styles.terminalWrapper}>
                <div className={styles.terminal1}>Terminal</div>
              </div>
              <div className={styles.linkWrapper}>
                <div className={styles.link}>Coming Soon</div>
                <canvas id="canvas"/>
                
              </div>
              
            </div>
              

              

                

                

              
            </div>
            
            
          </div>
      
        </div>
       
        
      </div>
      
      <MultichainMemecoinCard />
    </div>
  );
};

export default Terminal;
