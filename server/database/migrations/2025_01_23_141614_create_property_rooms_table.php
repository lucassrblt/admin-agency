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
        Schema::create('property_rooms', function (Blueprint $table) {
            $table->id();
            $table->foreignId('property_id')->constrained()->onDelete('cascade');
            $table->integer('bedroom')->nullable();
            $table->integer('bathroom')->nullable();
            $table->integer('waterroom')->nullable();
            $table->integer('toilets')->nullable();
            $table->boolean('toilets_separate')->default(false);
            $table->boolean('cellar')->default(false);
            $table->float('cellar_surface')->nullable();
            $table->boolean('dinning_room')->default(false);
            $table->float('dinning_room_surface')->nullable();
            $table->boolean('living_room')->default(false);
            $table->float('living_room_surface')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('property_rooms');
    }
};
