"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Demo data - would come from database in production
const recentGenerations = [
  {
    id: "1",
    productName: "Launcher",
    platform: "Twitter",
    createdAt: "2 hours ago",
    preview: "I spent 6 months writing launch posts that got ignored...",
  },
  {
    id: "2",
    productName: "Launcher",
    platform: "Reddit",
    createdAt: "2 hours ago",
    preview: "Hey everyone, I've been lurking here for a while...",
  },
  {
    id: "3",
    productName: "Launcher",
    platform: "Hacker News",
    createdAt: "3 hours ago",
    preview: "Show HN: Launcher – AI-powered launch copy...",
  },
];

const stats = [
  { label: "Generations", value: "3" },
  { label: "Products", value: "1" },
  { label: "This Month", value: "3 / 10" },
];

export default function DashboardPage() {
  return (
    <div className="container max-w-screen-xl py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back. Ready to launch something?
          </p>
        </div>
        <Button asChild>
          <Link href="/generate">Generate New Copy</Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-2">
              <CardDescription>{stat.label}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card className="cursor-pointer hover:border-primary/40 transition-colors">
          <Link href="/generate">
            <CardHeader>
              <CardTitle className="text-lg">Twitter Thread</CardTitle>
              <CardDescription>Hook + 4-5 tweets</CardDescription>
            </CardHeader>
          </Link>
        </Card>
        <Card className="cursor-pointer hover:border-primary/40 transition-colors">
          <Link href="/generate">
            <CardHeader>
              <CardTitle className="text-lg">Reddit Post</CardTitle>
              <CardDescription>r/SideProject style</CardDescription>
            </CardHeader>
          </Link>
        </Card>
        <Card className="cursor-pointer hover:border-primary/40 transition-colors">
          <Link href="/generate">
            <CardHeader>
              <CardTitle className="text-lg">Hacker News</CardTitle>
              <CardDescription>Show HN format</CardDescription>
            </CardHeader>
          </Link>
        </Card>
        <Card className="cursor-pointer hover:border-primary/40 transition-colors">
          <Link href="/generate">
            <CardHeader>
              <CardTitle className="text-lg">Product Hunt</CardTitle>
              <CardDescription>Full listing</CardDescription>
            </CardHeader>
          </Link>
        </Card>
      </div>

      {/* Recent Generations */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recent Generations</h2>
          <Link
            href="/dashboard/history"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            View All
          </Link>
        </div>

        <div className="space-y-4">
          {recentGenerations.map((gen) => (
            <Card key={gen.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-primary">
                      {gen.platform}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {gen.productName}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {gen.createdAt}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {gen.preview}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {recentGenerations.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground mb-4">
                No generations yet. Create your first one.
              </p>
              <Button asChild>
                <Link href="/generate">Generate Copy</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
