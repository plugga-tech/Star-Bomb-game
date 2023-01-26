class Bomb {

  /* ------------------
        ATTRIBUTES
  ------------------ */ 
  public x: number;
  public y: number;
  public vx: number;
  public vy: number;
  public diameter: number;
  public timeToLive: number; // The bombs lifetime

  /* --------------------
        CONSTRUCTOR
  -------------------- */ 
  constructor(diameter: number, x: number, y: number) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.diameter = diameter;
    this.timeToLive = 8_000; // Sets the detonation time
  }

  /* ------------------
        METHODS
  ------------------ */ 
  // Draw
  public draw() {
    noStroke();
    fill(0, 0, 0, 0);
    image(images.neonGreenBombClear, this.x, this.y);
    ellipse(this.x, this.y, this.diameter);
  }

  // Update
  public update(playboardWidth: number, playboardHeight: number) {
    this.moveBomb();
    this.checkBorderCollision(playboardWidth, playboardHeight);
  }

  // Moves bomb with every frame rate update
  private moveBomb() {
    this.x += this.vx;
    this.y += this.vy;
  }

  // Check collision with borders
  private checkBorderCollision(playboardWidth: number, playboardHeight: number) {
    const playboardLeftBorder = width / 2 - playboardWidth / 2;
    const playboardRightBorder = width / 2 + playboardWidth / 2;
    const playboardTopBorder = height / 2 - playboardHeight / 2 + 40;
    const playboardBottomBorder = height / 2 + playboardHeight / 2 + 40;
    const bombRadius = this.diameter / 2;

    // Checks collision with right border
    // The if conditionals decides the bombs speed (vx) after collision
    if (this.x > playboardRightBorder - bombRadius) {
      if (this.vx > 0 && this.vx < 1) {
        this.vx = -1;
      } else if (this.vx > 1 && this.vx <= 2) {
        this.vx = -2;
      } else if (this.vx > 2 && this.vx <= 3) {
        this.vx = -3;
      } else if (this.vx > 3 && this.vx <= 4) {
        this.vx = -4;
      } else if (this.vx > 4) {
        this.vx = -5;
      }
    }

    // Checks collision with left border
    // The if conditionals decides the bombs speed (vx) after collision
    if (this.x < playboardLeftBorder + bombRadius) {
      if (this.vx < 0 && this.vx > -1) {
        this.vx = 1;
      } else if (this.vx < -1 && this.vx >= -2) {
        this.vx = 2;
      } else if (this.vx < -2 && this.vx >= -3) {
        this.vx = 3;
      } else if (this.vx < -3 && this.vx >= -4) {
        this.vx = 4;
      } else if (this.vx < -4) {
        this.vx = 5;
      }
    }

    // Checks collision with top border
    // The if conditionals decides the bombs speed (vy) after collision
    if (this.y < playboardTopBorder + bombRadius) {
      if (this.vy < 0 && this.vy > -1) {
        this.vy = 1;
      } else if (this.vy < -1 && this.vy >= -2) {
        this.vy = 2;
      } else if (this.vy < -2 && this.vy >= -3) {
        this.vy = 3;
      } else if (this.vy < -3 && this.vy >= -4) {
        this.vy = 4;
      } else if (this.vy < -4) {
        this.vy = 5;
      }
    }

    // Checks collision with bottom border
    // The if conditionals decides the bombs speed (vy) after collision
    if (this.y > playboardBottomBorder - bombRadius) {
      if (this.vy > 0 && this.vy < 1) {
        this.vy = -1;
      } else if (this.vy > 1 && this.vy <= 2) {
        this.vy = -2;
      } else if (this.vy > 2 && this.vy <= 3) {
        this.vy = -3;
      } else if (this.vy > 3 && this.vy <= 4) {
        this.vy = -4;
      } else if (this.vy > 4) {
        this.vy = -5;
      }
    }
  }
}
