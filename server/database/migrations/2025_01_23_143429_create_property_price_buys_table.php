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
        Schema::create('property_price_buys', function (Blueprint $table) {
            $table->id();
            $table->foreignId('property_id')->constrained()->onDelete('cascade');
            $table->enum('honorary_for', ['BUYER', 'SELLER'])->nullable();
            $table->decimal('honorary', 10, 2)->nullable();
            $table->decimal('price', 10, 2)->nullable();
            $table->decimal('land_price', 10, 2)->nullable();
            $table->decimal('price_surface', 10, 2)->nullable();
            $table->decimal('price_with_honorary', 10, 2)->nullable();
            $table->boolean('coownership')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('property_price_buys');
    }
};
