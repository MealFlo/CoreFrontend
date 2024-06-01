CREATE TABLE "users" (
  "id" varchar PRIMARY KEY,
  "username" varchar UNIQUE NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "role" varchar NOT NULL,
  "date_joined" timestamptz NOT NULL,
  "last_login" timestamptz NOT NULL
);

CREATE TABLE "restaurants" (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "address" varchar NOT NULL,
  "phone_number" varchar NOT NULL,
  "created_at" timestamptz DEFAULT (now()),
  "updated_at" timestamptz DEFAULT (now())
);

CREATE TABLE "tables" (
  "id" serial PRIMARY KEY,
  "restaurant_id" integer,
  "table_number" integer NOT NULL,
  "qr_code" varchar UNIQUE NOT NULL,
  "status" varchar NOT NULL,
  "created_at" timestamptz DEFAULT (now()),
  "updated_at" timestamptz DEFAULT (now())
);

CREATE TABLE "menu_categories" (
  "id" serial PRIMARY KEY,
  "restaurant_id" integer,
  "name" varchar NOT NULL,
  "description" text,
  "created_at" timestamptz DEFAULT (now()),
  "updated_at" timestamptz DEFAULT (now())
);

CREATE TABLE "menu_items" (
  "id" serial PRIMARY KEY,
  "category_id" integer,
  "name" varchar NOT NULL,
  "description" text,
  "price" decimal(10,2) NOT NULL,
  "image_url" varchar,
  "is_available" boolean DEFAULT true,
  "created_at" timestamptz DEFAULT (now()),
  "updated_at" timestamptz DEFAULT (now())
);

CREATE TABLE "orders" (
  "id" serial PRIMARY KEY,
  "table_id" integer,
  "user_id" varchar,
  "status" varchar NOT NULL,
  "order_time" timestamptz DEFAULT (now()),
  "total_price" decimal(10,2) NOT NULL
);

CREATE TABLE "order_items" (
  "id" serial PRIMARY KEY,
  "order_id" integer,
  "menu_item_id" integer,
  "quantity" integer NOT NULL,
  "price" decimal(10,2) NOT NULL,
  "special_instructions" text
);

CREATE TABLE "promotions" (
  "id" serial PRIMARY KEY,
  "restaurant_id" integer,
  "name" varchar NOT NULL,
  "description" text,
  "discount_percentage" decimal(5,2) NOT NULL,
  "start_date" date NOT NULL,
  "end_date" date NOT NULL,
  "is_active" boolean DEFAULT true,
  "created_at" timestamptz DEFAULT (now()),
  "updated_at" timestamptz DEFAULT (now())
);

CREATE TABLE "promotion_items" (
  "promotion_id" integer,
  "menu_item_id" integer,
  "menu_categories_id" integer
);

CREATE TABLE "revenue_reports" (
  "id" serial PRIMARY KEY,
  "restaurant_id" integer,
  "date" date NOT NULL,
  "daily_revenue" decimal(10,2) NOT NULL,
  "daily_expenses" decimal(10,2),
  "created_at" timestamptz DEFAULT (now()),
  "updated_at" timestamptz DEFAULT (now())
);

CREATE INDEX "idx_users_email" ON "users" ("email");

CREATE INDEX "idx_users_role" ON "users" ("role");

CREATE INDEX "idx_restaurant_name" ON "restaurants" ("name");

CREATE INDEX "idx_tables_status" ON "tables" ("status");

CREATE INDEX "idx_menu_items_availability" ON "menu_items" ("is_available");

CREATE INDEX "idx_orders_status" ON "orders" ("status");

CREATE INDEX "idx_promotions_active" ON "promotions" ("is_active");

COMMENT ON TABLE "users" IS 'Stores user data with Firebase Authentication UID instead of passwords';

COMMENT ON COLUMN "users"."id" IS 'Firebase UID';

COMMENT ON COLUMN "users"."role" IS 'Role must be one of guest, front_house, back_house, management';

COMMENT ON COLUMN "restaurants"."phone_number" IS 'VARCHAR to accommodate different formats';

COMMENT ON COLUMN "tables"."status" IS 'Status must be available, occupied, or out_of_order';

COMMENT ON COLUMN "menu_items"."price" IS 'Price must be greater than 0';

COMMENT ON COLUMN "orders"."status" IS 'Status must be one of pending, accepted, in_kitchen, served, paid, cancelled';

COMMENT ON COLUMN "orders"."total_price" IS 'Total price must be equal or greater than 0';

COMMENT ON COLUMN "order_items"."quantity" IS 'Quantity must be greater than 0';

COMMENT ON COLUMN "order_items"."price" IS 'Price at the time of ordering, must be equal or greater than 0';

COMMENT ON COLUMN "promotions"."discount_percentage" IS 'Discount percentage must be greater than 0 and less or equal to 100';

COMMENT ON TABLE "promotion_items" IS 'Composite primary key on (promotion_id, menu_item_id, menu_categories_id) is assumed';

COMMENT ON COLUMN "revenue_reports"."daily_revenue" IS 'Daily revenue must be equal or greater than 0';

COMMENT ON COLUMN "revenue_reports"."daily_expenses" IS 'Daily expenses must be equal or greater than 0';

ALTER TABLE "tables" ADD FOREIGN KEY ("restaurant_id") REFERENCES "restaurants" ("id");

ALTER TABLE "menu_categories" ADD FOREIGN KEY ("restaurant_id") REFERENCES "restaurants" ("id");

ALTER TABLE "menu_items" ADD FOREIGN KEY ("category_id") REFERENCES "menu_categories" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("table_id") REFERENCES "tables" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("menu_item_id") REFERENCES "menu_items" ("id");

ALTER TABLE "promotions" ADD FOREIGN KEY ("restaurant_id") REFERENCES "restaurants" ("id");

ALTER TABLE "promotion_items" ADD FOREIGN KEY ("promotion_id") REFERENCES "promotions" ("id");

ALTER TABLE "promotion_items" ADD FOREIGN KEY ("menu_item_id") REFERENCES "menu_items" ("id");

ALTER TABLE "promotion_items" ADD FOREIGN KEY ("menu_categories_id") REFERENCES "menu_categories" ("id");

ALTER TABLE "revenue_reports" ADD FOREIGN KEY ("restaurant_id") REFERENCES "restaurants" ("id");
