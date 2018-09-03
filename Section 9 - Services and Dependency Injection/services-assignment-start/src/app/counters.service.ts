export class CountersService {
    activeCount = 0;
    inactiveCount = 0;

    increaseActiveCount() {
        this.activeCount++;
        console.log('Inactive to active: ' + this.activeCount);
    }

    increaseInactiveCount() {
        this.inactiveCount++;
        console.log('Active to inactive: ' + this.inactiveCount);
    }
}
