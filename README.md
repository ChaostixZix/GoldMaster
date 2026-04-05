# gold-master

## Overview
Laravel web application for selling MMORPG items with a Vue and Inertia-based frontend.

## Problem
An item-selling workflow for game goods needs storefront, transaction, and notification support in one application.

## Solution
This repository contains the Laravel application, frontend assets, and supporting data for the Gold Master marketplace.

## Demo
No public demo is documented.

## Setup
```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
npm run dev
php artisan serve
```
