# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.
ActiveRecord::Schema[7.0].define(version: 2022_07_29_124846) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "documents", force: :cascade do |t|
    t.string "attachment"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "type"
    t.boolean "archive", default: false
    t.string "attachable_type"
    t.integer "attachable_id"
  end

  create_table "enrollments", force: :cascade do |t|
    t.jsonb "scopes", default: {}
    t.string "siret"
    t.string "status"
    t.boolean "cgu_approved"
    t.string "target_api"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "linked_token_manager_id"
    t.string "nom_raison_sociale"
    t.integer "previous_enrollment_id"
    t.jsonb "additional_content", default: {}
    t.string "intitule"
    t.string "description"
    t.string "fondement_juridique_title"
    t.string "fondement_juridique_url"
    t.integer "data_retention_period"
    t.string "data_recipients"
    t.string "data_retention_comment"
    t.integer "organization_id"
    t.bigint "copied_from_enrollment_id"
    t.string "demarche"
    t.string "type_projet"
    t.string "date_mise_en_production"
    t.string "volumetrie_approximative"
    t.boolean "dpo_is_informed"
    t.string "technical_team_type"
    t.string "technical_team_value"
    t.index ["copied_from_enrollment_id"], name: "index_enrollments_on_copied_from_enrollment_id"
  end

  create_table "events", id: :serial, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.bigint "user_id"
    t.bigint "enrollment_id"
    t.string "comment"
    t.jsonb "diff"
    t.datetime "processed_at"
    t.index ["enrollment_id"], name: "index_events_on_enrollment_id"
    t.index ["name"], name: "index_events_on_name"
    t.index ["user_id"], name: "index_events_on_user_id"
  end

  create_table "team_members", force: :cascade do |t|
    t.string "email"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "family_name"
    t.string "given_name"
    t.string "phone_number"
    t.string "job"
    t.string "type"
    t.bigint "enrollment_id"
    t.bigint "user_id"
    t.index ["enrollment_id"], name: "index_team_members_on_enrollment_id"
    t.index ["user_id"], name: "index_team_members_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "roles", default: [], array: true
    t.string "uid"
    t.boolean "email_verified", default: false
    t.jsonb "organizations", default: [], array: true
    t.string "family_name"
    t.string "given_name"
    t.string "phone_number"
    t.string "job"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["uid"], name: "index_users_on_uid", unique: true
  end

  add_foreign_key "enrollments", "enrollments", column: "copied_from_enrollment_id"
  add_foreign_key "enrollments", "enrollments", column: "previous_enrollment_id"
  add_foreign_key "events", "enrollments"
  add_foreign_key "events", "users"
  add_foreign_key "team_members", "enrollments"
  add_foreign_key "team_members", "users"
end
