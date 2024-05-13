var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Min, Length, IsInt, IsNumber, IsOptional } from "class-validator";
let Apartments = class Apartments {
    id;
    rooms;
    name;
    price;
    description;
};
__decorate([
    PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Apartments.prototype, "id", void 0);
__decorate([
    Column(),
    IsInt({ message: "Rooms has to be an INTEGER value" }),
    Min(1, {
        message: "Amount of rooms can't be less or equal to 0, rooms is required field",
    }),
    __metadata("design:type", Number)
], Apartments.prototype, "rooms", void 0);
__decorate([
    Column("text"),
    Length(0, 99, {
        message: "Name is required field and must be no longer than 99 characters",
    }),
    __metadata("design:type", String)
], Apartments.prototype, "name", void 0);
__decorate([
    Column({ type: "real" }),
    IsNumber({}, { message: "Price has to be a NUMBER" }),
    Min(1, { message: "Price can't be less than 0, price is a required field" }),
    __metadata("design:type", Number)
], Apartments.prototype, "price", void 0);
__decorate([
    Column("text", { default: "" }),
    IsOptional(),
    Length(0, 999, {
        message: "Description must be no longer than 999 characters",
    }),
    __metadata("design:type", String)
], Apartments.prototype, "description", void 0);
Apartments = __decorate([
    Entity()
], Apartments);
export { Apartments };
//# sourceMappingURL=Apartments.js.map