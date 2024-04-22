import {
  loadGLTF,
  loadTexture,
  loadTextures,
  loadVideo,
} from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/loader.js";

const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener("DOMContentLoaded", () => {
  async function start() {
    const mindThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: "assets/target.mind",
      uiLoading: "#scanning-overlay",
    });

    const { renderer, scene, camera } = mindThree;
    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    scene.add(light);

    const loadFont = () => {
      return new Promise((resolve, reject) => {
        const loader = new THREE.FontLoader();

        loader.load(
          "https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/fonts/helvetiker_regular.typeface.json",
          (font) => {
            resolve(font); // Resolve the promise with the loaded font
          },
          undefined, // Progress callback (optional)
          (error) => {
            reject(error); // Reject the promise with the error
          }
        );
      });
    };

    const font = await loadFont();

    const target_image0ef164c6f10_iconGeometry = new THREE.PlaneGeometry(1, 1);
    const target_image0ef164c6f10_texture = await loadTexture(
      "assets/pattern-images.png"
    );
    const target_image0ef164c6f10_image = new THREE.MeshBasicMaterial({
      map: target_image0ef164c6f10_texture,
    });
    const target_image0ef164c6f10 = new THREE.Mesh(
      target_image0ef164c6f10_iconGeometry,
      target_image0ef164c6f10_image
    );
    target_image0ef164c6f10.scale.set(1, 1, 1);
    target_image0ef164c6f10.position.set(0, 0, 0);
    target_image0ef164c6f10.rotation.set(-0.001, 0, 0);

    const video_asset_c9d64293335_planeGeometry = new THREE.PlaneGeometry(1, 1);

    const video_asset_c9d64293335_Item0Video = await loadVideo(
      "assets/DwarDemo.mp4"
    );

    const video_asset_c9d64293335_Item0VideoTexture = new THREE.VideoTexture(
      video_asset_c9d64293335_Item0Video
    );

    const video_asset_c9d64293335_Item0VideoMaterial =
      new THREE.MeshBasicMaterial({
        map: video_asset_c9d64293335_Item0VideoTexture,
      });

    const video_asset_c9d64293335 = new THREE.Mesh(
      video_asset_c9d64293335_planeGeometry,
      video_asset_c9d64293335_Item0VideoMaterial
    );

    video_asset_c9d64293335.position.set(3, 1.6, 0);

    const isIOS = navigator.appVersion.indexOf("Mac") != -1 ? true : false;

    video_asset_c9d64293335_Item0Video.muted = isIOS;
    video_asset_c9d64293335_Item0Video.loop = true;

    video_asset_c9d64293335.scale.set(4, 2.18, 1);

    video_asset_c9d64293335.rotation.set(0, 0, 0);

    const logo_0ef6d9d7_cf260ef6d_iconGeometry = new THREE.CircleGeometry(
      0.5,
      32
    );
    const logo_0ef6d9d7_cf260ef6d_texture = await loadTexture(
      "assets/circle-wa-sm_113.png"
    );
    const logo_0ef6d9d7_cf260ef6d_image = new THREE.MeshBasicMaterial({
      map: logo_0ef6d9d7_cf260ef6d_texture,
    });
    const logo_0ef6d9d7_cf260ef6d = new THREE.Mesh(
      logo_0ef6d9d7_cf260ef6d_iconGeometry,
      logo_0ef6d9d7_cf260ef6d_image
    );
    logo_0ef6d9d7_cf260ef6d.scale.set(0.6, 0.6, 1);
    logo_0ef6d9d7_cf260ef6d.position.set(1.2, -0.2, 0.1);
    logo_0ef6d9d7_cf260ef6d.rotation.set(-0.001, 0, 0);
    logo_0ef6d9d7_cf260ef6d.userData.clickable = true;
    const logo_7e8f68ea_53367e8f6_iconGeometry = new THREE.CircleGeometry(
      0.5,
      32
    );
    const logo_7e8f68ea_53367e8f6_texture = await loadTexture(
      "assets/circle-web-sm_114.png"
    );
    const logo_7e8f68ea_53367e8f6_image = new THREE.MeshBasicMaterial({
      map: logo_7e8f68ea_53367e8f6_texture,
    });
    const logo_7e8f68ea_53367e8f6 = new THREE.Mesh(
      logo_7e8f68ea_53367e8f6_iconGeometry,
      logo_7e8f68ea_53367e8f6_image
    );
    logo_7e8f68ea_53367e8f6.scale.set(0.6, 0.6, 1);
    logo_7e8f68ea_53367e8f6.position.set(3, -0.2, 0);
    logo_7e8f68ea_53367e8f6.rotation.set(-0.001, 0, 0);
    logo_7e8f68ea_53367e8f6.userData.clickable = true;
    const logo_ac517925_7a2eac517_iconGeometry = new THREE.CircleGeometry(
      0.5,
      32
    );
    const logo_ac517925_7a2eac517_texture = await loadTexture(
      "assets/circle-mail-sm_125.png"
    );
    const logo_ac517925_7a2eac517_image = new THREE.MeshBasicMaterial({
      map: logo_ac517925_7a2eac517_texture,
    });
    const logo_ac517925_7a2eac517 = new THREE.Mesh(
      logo_ac517925_7a2eac517_iconGeometry,
      logo_ac517925_7a2eac517_image
    );
    logo_ac517925_7a2eac517.scale.set(0.6, 0.6, 1);
    logo_ac517925_7a2eac517.position.set(4.7, -0.2, 0);
    logo_ac517925_7a2eac517.rotation.set(-0.001, 0, 0);
    logo_ac517925_7a2eac517.userData.clickable = true;

    document.body.addEventListener("click", (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

      const mouse = new THREE.Vector2(mouseX, mouseY);
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        let o = intersects[0].object;

        while (o.parent && !o.userData?.clickable) {
          o = o.parent;
        }

        if (o.userData.clickable) window.showLoadingScreen();

        if (o.userData.clickable && o === logo_0ef6d9d7_cf260ef6d) {
          window.location.href = "https://wa.me/918175814482/?text=hi";
        }

        if (o.userData.clickable && o === logo_7e8f68ea_53367e8f6) {
          window.location.href = "https://bharatbox.sandbox.game/";
        }

        if (o.userData.clickable && o === logo_ac517925_7a2eac517) {
          window.location.href = "mailto:sandeep@reworks.in";
        }
      }
    });

    const anchor = mindThree.addAnchor(0);
    // anchor.group.add(target_image0ef164c6f10)
    anchor.group.add(video_asset_c9d64293335);
    anchor.group.add(logo_0ef6d9d7_cf260ef6d);
    anchor.group.add(logo_7e8f68ea_53367e8f6);
    anchor.group.add(logo_ac517925_7a2eac517);

    anchor.onTargetFound = () => {
      video_asset_c9d64293335_Item0Video.play();
    };

    anchor.onTargetLost = () => {
      video_asset_c9d64293335_Item0Video.pause();
    };

    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});
