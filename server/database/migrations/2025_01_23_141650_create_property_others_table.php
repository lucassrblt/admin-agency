<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('property_others', function (Blueprint $table) {
            $table->id();
            $table->foreignId('property_id')->constrained()->onDelete('cascade');
            $table->integer('build_year')->nullable();
            $table->boolean('build_recent')->default(false);
            $table->boolean('brand_new')->default(false);
            $table->boolean('works_needed')->default(false);
            $table->integer('boxes')->nullable();
            $table->boolean('garage')->default(false);
            $table->integer('parking_places')->nullable();
            $table->integer('floor')->nullable();
            $table->integer('balcony')->nullable();
            $table->float('balcony_surface')->nullable();
            $table->integer('terrace')->nullable();
            $table->boolean('garden')->default(false);
            $table->boolean('tv_cable')->default(false);
            $table->boolean('swimming_pool')->default(false);
            $table->boolean('convertible_attic')->default(false);
            $table->boolean('view')->default(false);
            $table->boolean('entrance')->default(false);
            $table->boolean('towards')->default(false);
            $table->boolean('chimney')->default(false);
            $table->string('orientation')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('property_others');
    }
};
