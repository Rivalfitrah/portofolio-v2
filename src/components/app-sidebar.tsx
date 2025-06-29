"use client"

import * as React from "react"
import {
  Atom,
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Folder,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  User,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "atmint",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Dashboard",
      logo: LayoutDashboard,
      plan: "",
    },
    // {
    //   name: "Acme Corp.",
    //   logo: AudioWaveform,
    //   plan: "Startup",
    // },
    // {
    //   name: "Evil Corp.",
    //   logo: Command,
    //   plan: "Free",
    // },
  ],
  navMain: [
    // {
    //   title: "Dashboard",
    //   url: "#",
    //   icon: SquareTerminal,
    //   isActive: true,
    //   items: [
    //     {
    //       title: "overview",
    //       url: "#",
    //     },
    //     {
    //       title: "skills",
    //       url: "#",
    //     },
    //     {
    //       title: "proyek",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Models",
    //   url: "#",
    //   icon: Bot,
    //   items: [
    //     {
    //       title: "Genesis",
    //       url: "#",
    //     },
    //     {
    //       title: "Explorer",
    //       url: "#",
    //     },
    //     {
    //       title: "Quantum",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Documentation",
    //   url: "#",
    //   icon: BookOpen,
    //   items: [
    //     {
    //       title: "Introduction",
    //       url: "#",
    //     },
    //     {
    //       title: "Get Started",
    //       url: "#",
    //     },
    //     {
    //       title: "Tutorials",
    //       url: "#",
    //     },
    //     {
    //       title: "Changelog",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "General",
    //       url: "#",
    //     },
    //     {
    //       title: "Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Billing",
    //       url: "#",
    //     },
    //     {
    //       title: "Limits",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  projects: [
    {
      name: "Proyek",
      url: "/dashboard",
      icon: Folder,
    },
    {
      name: "Skills",
      url: "/dashboard/skill",
      icon: Atom,
    },
    {
      name: "Profile",
      url: "/dashboard/profile",
      icon: User,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      {/* <SidebarHeader>
        <div className="flex items-center gap-2">
          <LayoutDashboard className="h-6 w-6 mt-5" />
          <span className="text-lg font-semibold mt-5">Dashboard</span>
        </div>
      </SidebarHeader> */}
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
