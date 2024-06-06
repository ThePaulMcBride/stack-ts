export class Stack {
  frames: any[] = [];

  push(item: any) {
    this.frames.push(item);
  }

  pop() {
    return this.frames.pop();
  }

  peek() {
    return this.frames[this.frames.length - 1];
  }

  size() {
    return this.frames.length;
  }

  isEmpty() {
    return this.frames.length === 0;
  }
}
