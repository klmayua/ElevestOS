import { getCurrentUser, updateProfileAction, changePasswordAction } from "@/features/auth/auth.actions";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/auth/login");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-display-sm font-heading font-bold text-primary">
          Settings
        </h1>
        <p className="text-body-lg text-gray-600 mt-2">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar */}
        <div className="space-y-2">
          <button className="w-full text-left px-4 py-3 rounded-md bg-secondary/10 text-secondary font-medium">
            Profile Settings
          </button>
          <button className="w-full text-left px-4 py-3 rounded-md hover:bg-surface-container-low text-gray-700">
            Organisation
          </button>
          <button className="w-full text-left px-4 py-3 rounded-md hover:bg-surface-container-low text-gray-700">
            Notifications
          </button>
          <button className="w-full text-left px-4 py-3 rounded-md hover:bg-surface-container-low text-gray-700">
            Security
          </button>
          <button className="w-full text-left px-4 py-3 rounded-md hover:bg-surface-container-low text-gray-700">
            Billing
          </button>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <div className="card">
            <div className="card-header">
              <h2 className="text-h4 font-heading font-semibold text-primary">
                Profile Information
              </h2>
            </div>
            <div className="card-body">
              <form action={updateProfileAction} className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-2xl">
                      {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <button type="button" className="btn-secondary text-sm">
                      Change Avatar
                    </button>
                    <p className="text-body-sm text-gray-500 mt-1">
                      JPG, GIF or PNG. Max 2MB.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-label-md text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      defaultValue={user.firstName}
                      className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-label-md text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      defaultValue={user.lastName}
                      className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-label-md text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={user.email}
                      disabled
                      className="w-full px-4 py-3 rounded-md border border-input bg-gray-100 text-gray-500 cursor-not-allowed"
                    />
                    <p className="text-body-sm text-gray-500 mt-1">
                      Email cannot be changed. Contact support for assistance.
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-label-md text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      defaultValue={user.phone || ""}
                      className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <button type="button" className="btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Change Password */}
          <div className="card">
            <div className="card-header">
              <h2 className="text-h4 font-heading font-semibold text-primary">
                Change Password
              </h2>
            </div>
            <div className="card-body">
              <form action={changePasswordAction} className="space-y-6">
                <div>
                  <label className="block text-label-md text-gray-700 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="currentPassword"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-label-md text-gray-700 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="newPassword"
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-label-md text-gray-700 mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="btn-primary">
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="card border-error/50">
            <div className="card-header">
              <h2 className="text-h4 font-heading font-semibold text-error">
                Danger Zone
              </h2>
            </div>
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-body-md font-medium text-primary">Delete Account</p>
                  <p className="text-body-sm text-gray-600">
                    Permanently delete your account and all associated data
                  </p>
                </div>
                <button className="px-4 py-2 rounded-md border border-error text-error hover:bg-error hover:text-white transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
