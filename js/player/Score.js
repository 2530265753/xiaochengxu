import { DataStore } from '../base/DataStore.js';

export class Score{
  constructor(){
    this.DataStore = DataStore.getInstance();
    this.ctx = this.DataStore.ctx;
    this.scoreNum = 0;
    this.canAdd = true;

  }
  draw(){
    this.ctx.font = '25px Arial';
    this.ctx.fillStyle = '#de335e';
    this.ctx.fillText(
      this.scoreNum,
      this.DataStore.canvas.width/2,
      this.DataStore.canvas.height/18,
      
    )
  }
}