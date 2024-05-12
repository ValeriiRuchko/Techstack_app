import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Min, Length, IsInt, IsNumber } from "class-validator";

// while working with Supabase I came across such novel convention expressed by core PostgreSQL team:
// https://wiki.postgresql.org/wiki/Don't_Do_This#Don.27t_use_varchar.28n.29_by_default
// --- --- --- --- ---
// Thus all the fields don't use default for TypeORM varchar(255) as a preference of mine to adhere to the
// article above

@Entity()
export class Apartments {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  @IsInt({ message: "Rooms has to be an INTEGER value" })
  @Min(1, { message: "Amount of rooms can't be less than 0" })
  rooms?: number;

  @Column("text")
  @Length(0, 99, { message: "Name must be no longer than 99 characters" })
  name?: string;

  @Column({ type: "real" })
  @IsNumber({}, { message: "Price has to be a NUMBER" })
  @Min(1, { message: "Price can't be less than 0" })
  price?: number;

  @Column("text")
  @Length(0, 999, {
    message: "Description must be no longer than 999 characters",
  })
  description?: string;
}
