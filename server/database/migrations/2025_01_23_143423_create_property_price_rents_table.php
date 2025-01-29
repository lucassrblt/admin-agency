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
        Schema::create('property_price_rents', function (Blueprint $table) {
            $table->id();
            $table->foreignId('property_id')->constrained()->onDelete('cascade');
            $table->decimal('rent_base', 10, 2)->nullable();
            $table->decimal('rent_by_surface', 10, 2)->nullable();
            $table->enum('charges', ['INCLUDE', 'EXCLUDE'])->nullable();
            $table->decimal('charges_value', 10, 2)->nullable();
            $table->decimal('rent_with_charges', 10, 2)->nullable();
            $table->decimal('guarantee', 10, 2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('property_price_rents');
    }
};
