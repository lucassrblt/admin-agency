<?php

namespace App\Enum;

enum TransactionType : string
{
    case SELL = 'sell';
    case RENT = 'rent';
}
