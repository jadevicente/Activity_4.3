import Experience from '../Experience.js'
import * as THREE from 'three'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Fox from './Fox.js'

export default class World
{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        //console.log('World created!')
        this.resources.on('ready', () =>{
            this.floor = new Floor()
            this.fox = new Fox()
            this.environment = new Environment()
        })

        // TEST Mesh
        //const testMesh = new THREE.Mesh(
        //    new THREE.BoxGeometry(1,1,1),
         //   new THREE.MeshBasicMaterial()
        //)
        //this.scene.add(testMesh)
    }
        update(){
            if(this.fox)this.fox.update()
        }

    }
        /* Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            this.floor = new Floor()
            this.fox = new Fox()
            this.environment = new Environment()
        })
    }

     */
