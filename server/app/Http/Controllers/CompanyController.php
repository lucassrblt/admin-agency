<?php

namespace App\Http\Controllers;

use App\Http\Requests\CompanyRequest;
use Illuminate\Http\Request;
use App\Models\Company;
use Faker\Provider\Base;
use Illuminate\Support\Facades\Storage;

class CompanyController extends BaseController
{
    public function index()
    {
        return Company::all();
    }

    public function show($id)
    {
        return Company::find($id);
    }

    public function store(CompanyRequest $request)
    {
        $data = $request->validated();

        // Store compagny logo
        if ($data['logo']) {
            /** @var \Illuminate\Filesystem\FilesystemManager $disk */
            $disk = Storage::disk('s3_companies');
            $uploadedPath = $disk->put('', $data['logo']);
            $data['logo'] = $disk->url($uploadedPath);
        }

        $newCompagny = Company::create($data);
        
        // Get back src and save in table
        return $this->sendResponse($newCompagny, 'Compagny created', 201);

    }

    public function update(Request $request, $id)
    {
        $compagny = Company::findOrFail($id);
        $compagny->update($request->all());

        return $compagny;
    }

    public function delete(Request $request, $id)
    {
        $compagny = Company::findOrFail($id);
        $compagny->delete();

        return 204;
    }
}
