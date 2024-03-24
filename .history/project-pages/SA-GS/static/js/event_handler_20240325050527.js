document.addEventListener('DOMContentLoaded', domReady);

        function domReady() {
            new Dics({
                container: document.querySelectorAll('.b-dics')[0],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[1],
                hideTexts: false,
                textPosition: "bottom"

            });
        }

        function largeSceneEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 3
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'assets/img/nvidia/';
                        break;
                    case 1:
                        image.src = 'assets/img/jhu/';
                        break;
                    case 2:
                        image.src = 'assets/img/Barn/';
                        break;
                    case 3:
                        image.src = 'assets/img/Caterpillar/';
                        break;
                    case 4:
                        image.src = 'assets/img/Courthouse/';
                        break;
                    case 5:
                        image.src = 'assets/img/Ignatius/';
                        break;
                    case 6:
                        image.src = 'assets/img/Meetingroom/';
                        break;
                    case 7:
                        image.src = 'assets/img/Truck/';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + '/rgb.png';
                        break;
                    case 1:
                        image.src = image.src + '/mesh.png';
                        break;
                    case 2:
                        image.src = image.src + '/normal.png';
                        break;
                }
            }

            scene_list = document.getElementById("large-scale-recon-1").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
            scene_list = document.getElementById("large-scale-recon-2").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i+2) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }
        var tmp;
        var tmp_slide;
        function objectSceneEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 4;
            if(idx>=3) imagesLength = 3;
            console.log(sections);
            for (let i = 0; i < imagesLength; i++) {
                console.log(sections[i]);
                if(imagesLength == 3 && sections.length == 4){
                    tmp = sections[3];
                    sections[3].remove();
                    sections[0].setAttribute('style', 'flex: 0 0 250px;');
                    sections[1].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__text')[0].innerText = 'SA-GS Adaptive Filter (Ours)';
                    sections[1].getElementsByClassName('b-dics__slider')[0].setAttribute('style', 'left: 333px;');
                    sections[2].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__text')[0].innerText = 'GT';
                    sections[2].getElementsByClassName('b-dics__slider')[0].setAttribute('style', 'left: 666px;');
                }
                if(imagesLength == 4 && sections.length == 3){
                    dics.appendChild(tmp);
                    sections = dics.getElementsByClassName('b-dics__section');
                    sections[0].setAttribute('style', 'flex: 0 0 250px;');
                    sections[0].getElementsByClassName('b-dics__slider')[0].setAttribute('style', 'left: 250px;');
                    sections[1].setAttribute('style', 'flex: 0 0 250px;');
                    sections[1].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__text')[0].innerText = 'SA-GS Integration (Ours)';
                    sections[1].getElementsByClassName('b-dics__slider')[0].setAttribute('style', 'left: 500px;');
                    sections[2].setAttribute('style', 'flex: 0 0 250px;');
                    sections[2].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__text')[0].innerText = 'SA-GS Super Sampling (Ours)';
                    sections[2].getElementsByClassName('b-dics__slider')[0].setAttribute('style', 'left: 750px;');
                    sections[3].setAttribute('style', 'flex: 0 0 250px;');
                    sections[3].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__text')[0].innerText = 'GT';
                }
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'resources/360_images/bicycle_48';
                        break;
                    case 1:
                        image.src = 'resources/360_images/room_25';
                        break;
                    case 2:
                        image.src = 'resources/360_images/kitchen_59';
                        break;
                    case 3:
                        image.src = 'resources/360_images/garden_8';
                        break;
                    case 4:
                        image.src = 'resources/360_images/counter_134';
                        break;
                    case 5:
                        image.src = 'resources/360_images/treehill_64';
                        break;
                }
                if(idx<3){
                    switch (i) {
                        case 0:
                            image.src = image.src + '_raw.png';
                            break;
                        case 1:
                            image.src = image.src + '_sags_int.png';
                            break;
                        case 2:
                            image.src = image.src + '_sags_sup.png';
                            break;
                        case 3:
                            image.src = image.src + '_gt.png';
                            break;
    
                    }
                }else{
                    switch (i) {
                        case 0:
                            image.src = image.src + '_raw.png';
                            break;
                        case 1:
                            image.src = image.src + '_fil.png';
                            break;
                        case 2:
                            image.src = image.src + '_gt.png';
                            break;
                    }
                }
            }

            let scene_list = document.getElementById("object-scale-recon").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function ablation3DEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[1]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 4
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'resources/360_stmt_ablation/bicycle_0';
                        break;
                    case 1:
                        image.src = 'resources/360_stmt_ablation/bicycle_3';
                        break;
                    case 2:
                        image.src = 'resources/360_stmt_ablation/bicycle_5';
                        break;
                    case 3:
                        image.src = 'resources/360_stmt_ablation/garden_0';
                        break; 
                    case 4:
                        image.src = 'resources/360_stmt_ablation/garden_1';
                        break;
                    case 5:
                        image.src = 'resources/360_stmt_ablation/treehill_9';
                        break; 
                }
                switch (i) {
                    case 0:
                        image.src = image.src + '_no3d.jpg';
                        break;
                    case 1:
                        image.src = image.src + '_ours.jpg';
                        break;
                    case 2:
                        image.src = image.src + '_upgt.jpg';
                        break;
                    case 3:
                        image.src = image.src + '_gt.jpg';
                        break;
                }
            }

            let scene_list = document.getElementById("ablation-3d-filter").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }