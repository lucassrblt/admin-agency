<?php

namespace App\Interface;

interface PropertyRepositoryInterface
{
    //
    public function index();
    public function getByName(string $title);
}
