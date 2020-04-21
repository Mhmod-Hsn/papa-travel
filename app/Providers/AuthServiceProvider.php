<?php

namespace App\Providers;

use App\Accommodation;
use App\Agency;
use App\Booking;
use App\ContactUs;
use App\CustomPackage;
use App\Insurance;
use App\Lusion;
use App\Package;
use App\Policies\AccommodationPolicy;
use App\Policies\AgencyPolicy;
use App\Policies\BookingPolicy;
use App\Policies\ContactUsPolicy;
use App\Policies\CustomPackagePolicy;
use App\Policies\EmployeePolicy;
use App\Policies\InsurancePolicy;
use App\Policies\LusionPolicy;
use App\Policies\PackagePolicy;
use App\Policies\PermissionPolicy;
use App\Policies\PostPolicy;
use App\Policies\RolePolicy;
use App\Policies\SchedulePolicy;
use App\Post;
use App\Schedule;
use App\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
        User::class => EmployeePolicy::class,
        Role::class => RolePolicy::class,
        Permission::class => PermissionPolicy::class,
        Agency::class => AgencyPolicy::class,
        Package::class => PackagePolicy::class,
        Lusion::class => LusionPolicy::class,
        Schedule::class => SchedulePolicy::class,
        Accommodation::class => AccommodationPolicy::class,
        Booking::class => BookingPolicy::class,
        Post::class => PostPolicy::class,
        Insurance::class => InsurancePolicy::class,
        ContactUs::class => ContactUsPolicy::class,
        CustomPackage::class => CustomPackagePolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::routes();
    }
}
