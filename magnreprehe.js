class Size {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Method to check if both dimensions are zero
    isZero() {
        return this.width === 0 && this.height === 0;
    }

    // Method to get a string representation of the size
    toString() {
        return `Size(width: ${this.width}, height: ${this.height})`;
    }
}

// Creating a size proposal with zero dimensions
const zeroSizeProposal = new Size(0, 0);

console.log(zeroSizeProposal.toString()); // Output: Size(width: 0, height: 0)

// Check if the size proposal has zero dimensions
if (zeroSizeProposal.isZero()) {
    console.log('The size proposal contains zero in both dimensions.');
} else {
    console.log('The size proposal does not contain zero in both dimensions.');
}
