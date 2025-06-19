'use client';

import React from 'react';
import LoginForm from './LoginForm';

import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardTitle } from '@/components/ui/card';
import { UserType } from '@/types/User.type';
import { ArrowLeft } from 'lucide-react';

export default function LoginComponent() {
  const [showLogin, setShowLogin] = React.useState<UserType | null>(null);

  return (
    <div className="w-full flex justify-center items-center gap-12 text-white h-screen bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)]">
      <div className="w-full flex justify-center items-center gap-12 ">
        <div className="w-3/5 flex flex-col max-w-7xl gap-32 items-center">
          <h1 className="text-8xl">"Nous rejoindre"</h1>
          <p className="text-xl">
            Partagez vos conseils et apprenez à nos futurs innovateurs.
          </p>
        </div>
        <div className="w-2/5 flex flex-col justify-center gap-8">
          <div className="max-w-md flex flex-col gap-8">
            {showLogin ? (
              <>
                <i
                  onClick={() => setShowLogin(null)}
                  className="h-10 w-10 flex justify-center items-center shadow border border-white rounded-full cursor-pointer"
                >
                  <ArrowLeft />
                </i>
                <LoginForm type={showLogin} />
              </>
            ) : (
              <>
                <Card
                  onClick={() => setShowLogin('person')}
                  className="cursor-pointer hover:text-[var(--secondary-color)]"
                >
                  <label
                    htmlFor="person"
                    className="flex items-center gap-4 px-4"
                  >
                    <Checkbox
                      id="person"
                      className="rounded-full border-gray-700"
                    />
                    <CardTitle>Particulier</CardTitle>
                  </label>
                </Card>

                <Card
                  onClick={() => setShowLogin('organization')}
                  className="cursor-pointer hover:text-[var(--secondary-color)]"
                >
                  <label
                    htmlFor="organization"
                    className="flex items-center gap-4 px-4"
                  >
                    <Checkbox
                      id="organization"
                      className="rounded-full border-gray-700"
                    />
                    <CardTitle>Organization</CardTitle>
                  </label>
                </Card>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
