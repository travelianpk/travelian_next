"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

export default function DashboardShell({ session, children }) {
  return (
    <div className="app-wrapper layout-fixed sidebar-expand-lg sidebar-open bg-body-tertiary">
      {/* Top Navbar - AdminLTE header */}
      <nav className="app-header navbar navbar-expand bg-body">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-lte-toggle="sidebar"
                href="#"
                role="button"
              >
                <i className="bi bi-list" />
              </a>
            </li>
            <li className="nav-item d-none d-md-block">
              <Link href="/agent" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item d-none d-md-block">
              <Link href="/" className="nav-link">
                Back to site
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="navbar-search"
                href="#"
                role="button"
              >
                <i className="bi bi-search" />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
              >
                <i className="bi bi-chat-text" />
                <span className="navbar-badge badge text-bg-danger">3</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                <span className="dropdown-item dropdown-header">3 Messages</span>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item dropdown-footer">
                  See All Messages
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
              >
                <i className="bi bi-bell-fill" />
                <span className="navbar-badge badge text-bg-warning">15</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                <span className="dropdown-item dropdown-header">
                  15 Notifications
                </span>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item dropdown-footer">
                  See All Notifications
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-lte-toggle="fullscreen"
                role="button"
              >
                <i
                  data-lte-icon="maximize"
                  className="bi bi-arrows-fullscreen"
                />
                <i
                  data-lte-icon="minimize"
                  className="bi bi-fullscreen-exit"
                  style={{ display: "none" }}
                />
              </a>
            </li>
            <li className="nav-item dropdown user-menu">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/adminlte/assets/img/user2-160x160.jpg"
                  className="user-image rounded-circle shadow"
                  alt="User"
                />
                <span className="d-none d-md-inline">
                  {session?.user?.name || session?.user?.email || "Agent"}
                </span>
              </a>
              <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                <li className="user-header text-bg-primary">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/adminlte/assets/img/user2-160x160.jpg"
                    className="rounded-circle shadow"
                    alt="User"
                  />
                  <p>
                    {session?.user?.name || "Agent"} - Travelian Agent
                    <small>Member since {new Date().getFullYear()}</small>
                  </p>
                </li>
                <li className="user-footer">
                  <Link href="/agent" className="btn btn-default btn-flat">
                    Profile
                  </Link>
                  <button
                    type="button"
                    className="btn btn-default btn-flat float-end"
                    onClick={() => signOut({ callbackUrl: "/" })}
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      {/* Left Sidebar */}
      <aside className="app-sidebar bg-body-secondary shadow">
        <div className="sidebar-brand">
          <Link href="/agent" className="brand-link">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/adminlte/assets/img/AdminLTELogo.png"
              alt="Travelian"
              className="brand-image opacity-75 shadow"
            />
            <span className="brand-text fw-light">Travelian Admin</span>
          </Link>
        </div>

        <div className="sidebar-wrapper">
          <nav className="mt-2">
            <ul
              className="nav sidebar-menu flex-column"
              data-lte-toggle="treeview"
              role="navigation"
              aria-label="Main navigation"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <Link href="#" className="nav-link active">
                  <i className="nav-icon bi bi-speedometer" />
                  <p>
                    Dashboard
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link href="/agent" className="nav-link active">
                      <i className="nav-icon bi bi-circle" />
                      <p>Home</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  <i className="nav-icon bi bi-clipboard-fill" />
                  <p>
                    Bookings
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link href="#" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>All Bookings</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  <i className="nav-icon bi bi-people-fill" />
                  <p>
                    Customers
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link href="#" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>All Customers</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  <i className="nav-icon bi bi-airplane" />
                  <p>
                    Flights
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link href="#" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>Manage Flights</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  <i className="nav-icon bi bi-box-seam-fill" />
                  <p>
                    Packages
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link href="#" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>Umrah / Tours</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-header">MORE</li>
              <li className="nav-item">
                <Link href="/signin" className="nav-link">
                  <i className="nav-icon bi bi-box-arrow-in-right" />
                  <p>Login</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main content - clean empty area */}
      <main className="app-main" style={{ display: "flex", flexDirection: "column", minHeight: "calc(100vh - 57px)" }}>
        <div className="app-content-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <h3 className="mb-0">Dashboard</h3>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-end">
                  <li className="breadcrumb-item">
                    <Link href="/agent">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="app-content" style={{ flex: 1 }}>
          <div className="container-fluid">{children}</div>
        </div>
        <footer className="app-footer" style={{ marginTop: "auto" }}>
          <div className="float-end d-none d-sm-inline">Travelian Admin</div>
          <strong>
            Copyright &copy; {new Date().getFullYear()}{" "}
            <Link href="https://travelian.pk" className="text-decoration-none">
              Travelian
            </Link>
            . All rights reserved.
          </strong>
        </footer>
      </main>
    </div>
  );
}
