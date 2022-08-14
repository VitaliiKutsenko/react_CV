import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ResetPassword } from './pages/resetPassword/resetPassword';
import { SignIn } from './pages/signIn/signIn';
import { Layout } from './components/layout/layout';
import { PrivateRoute } from './components/hoc/PrivateRoute';
import { ArchivePage } from './pages/courses/achive/archivePage';
import { AvailablePage } from './pages/courses/available/availablePage';
import { PublicRoute } from './components/hoc/PublicRoute';
import { CourseProcess } from './pages/courses/courseProcess/CourseProcess';
import { MainLayout } from './components/mainPage/mainLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="courses/available" />} />
        <Route path="*" element={<MainLayout />}>
          <Route
            path="courses/available"
            element={
              <PrivateRoute>
                <AvailablePage />
              </PrivateRoute>
            }
          />
          <Route
            path="courses/archive"
            element={
              <PrivateRoute>
                <ArchivePage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="courses/:courseId"
          element={
            <PrivateRoute>
              <CourseProcess />
            </PrivateRoute>
          }
        />
        <Route
          path="sign-in"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <PublicRoute>
              <ResetPassword />
            </PublicRoute>
          }
        />
        <Route path="*" element={<p>NotFound</p>} />
      </Route>
    </Routes>
  );
};
