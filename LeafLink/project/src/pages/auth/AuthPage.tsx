import React, { useState } from 'react';
import SignInForm from '../../components/auth/SignInForm';
import SignUpForm from '../../components/auth/SignUpForm';
import { TreePine } from 'lucide-react';

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <TreePine className="h-12 w-12 text-green-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {isSignIn ? 'Sign in to your account' : 'Create your account'}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {isSignIn ? <SignInForm /> : <SignUpForm />}
          
          <div className="mt-6">
            <button
              onClick={() => setIsSignIn(!isSignIn)}
              className="w-full text-center text-sm text-gray-600 hover:text-gray-900"
            >
              {isSignIn ? 
                "Don't have an account? Sign up" : 
                "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}