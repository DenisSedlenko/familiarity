export class ItemMenu {
    name: string;
    icon: string;

    active: boolean;

    constructor (name: string, icon: string, active: boolean = false) {
        this.name = name;
        this.icon = icon;
        this.active = active;
    }
}
