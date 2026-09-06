import { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "coretuff",
    name: "CoreTuff",
    tagline: "Enterprise-grade server core",
    description:
      "A premium Minecraft Paper plugin that provides advanced server management, performance optimization, and security features. CoreTuff is the foundation for serious Minecraft servers.",
    category: "plugin",
    status: "Nightly",
    version: "2.0.0-nightly-2",
    icon: "/images/coretuff-logo.png",
    gradient: "from-purple-600 via-violet-500 to-fuchsia-500",
    downloads: "https://modrinth.com/plugin/coretuff",
    screenshots: ["/images/coretuff-logo.png"],
    technologies: ["Paper API", "Kotlin", "Gradle", "H2 Database", "Redis"],
    features: [
      "Advanced permission management",
      "Real-time performance monitoring",
      "Automated backup systems",
      "Anti-grief protection",
      "Player analytics dashboard",
      "Modular plugin architecture",
      "REST API integration",
    ],
    changelog: [
      {
        version: "2.0.0-nightly-2",
        date: "2026-07-28",
        notes: [
          "Second Nightly build of CoreTuff 2.0.",
          "Stability improvements and bug fixes from the first Nightly build.",
        ],
      },
      {
        version: "2.0.0-nightly-1",
        date: "2026-07-26",
        notes: [
          "First Nightly build of CoreTuff 2.0.",
          "Complete rebuild of the configuration system — migrated from multiple YAML files to a centralized embedded database.",
          "Introduced CoreTuff Web Panel (Alpha) — browser-based configuration management with live updates and session-based editing.",
          "New diagnostic system with /ct dump and /ct dumpdata commands.",
          "New /ct editor command to launch secure Web Editor sessions.",
          "New /ct dashboard command for managing the CoreTuff Dashboard in-game.",
          "New /ct bug command to open the GitHub Issue Tracker.",
          "Major internal refactor: improved module separation, faster startup, reduced filesystem dependency.",
          "Various stability improvements and bug fixes.",
        ],
      },
      {
        version: "1.0.0",
        date: "2026-06-16",
        notes: [
          "CoreTuff 1.0 is the first stable release.",
          "After multiple Nightly builds, Insider testing, and the Release Candidate phase, CoreTuff 1.0 is now officially released.",
          "",
          "Includes: Teleportation system, H2-backed economy with Vault integration, Lands (homes/warps), Moderation framework, Jail system, Kits, Utility commands, Virtual workbenches, Security (plugin/command hiding), Addon platform, PlaceholderAPI expansion.",
          "",
          "Platform support: Paper 1.21.5, Folia, Java 25, H2 Database, Vault, PlaceholderAPI, ProtocolLib, PacketEvents.",
          "",
          "Stability fixes: Thread-safety for economy interest, Folia scheduler compatibility, OfflinePlayer handling, Database resource leaks, Update notifications, Vault integration, Startup initialization ordering.",
          "",
          "Existing RC1 databases and configurations remain compatible.",
        ],
      },
      {
        version: "1.0.0-rc1",
        date: "2026-06-14",
        notes: [
          "CoreTuff has officially entered the Release Candidate phase.",
          "No new features have been added in this build. RC1 focuses entirely on stability, correctness, and reliability as we prepare for the 1.0 release.",
          "Unless critical issues are discovered, this build is expected to become the foundation of CoreTuff 1.0.",
          "",
          "Fixed — Interest Scheduler Thread Safety: Interest payouts were executed asynchronously on non-Folia servers. applyInterest() interacts with Bukkit APIs such as online player iteration and player messaging, which must run on the main server thread. The scheduler has been moved to a synchronous task to ensure thread safety and prevent potential concurrency issues.",
          "",
          "Fixed — Folia Countdown Titles: Countdown title tasks would never execute on Folia. The scheduler was using an incorrect overload, causing countdown tasks to be silently ignored. The countdown system now properly executes and reschedules itself on Folia servers.",
          "",
          "Fixed — Economy OfflinePlayer Handling: Unsafe OfflinePlayer to Player casting in the economy service. Replaced direct casting with a null-safe player lookup to prevent potential ClassCastExceptions when handling offline players.",
          "",
          "Fixed — Database Resource Leaks: JDBC resources were not being properly released in several repository implementations. Applied try-with-resources across the database layer, ensuring all PreparedStatement and ResultSet instances are correctly closed after use. Affected repositories: EconomyRepository, HomeRepository, WarpRepository, TransactionRepository. This improves long-term database stability and prevents cursor/resource leaks during extended server uptime.",
          "",
          "CoreTuff has officially entered the Release Candidate phase. Feature development is now frozen. Focus is now on bug fixes, stability improvements, and release readiness.",
        ],
      },
      {
        version: "1.0.0-insider-2",
        date: "2026-05-01",
        notes: [
          "In the spirit of the Insider phase, we removed one more file than strictly necessary.",
          "The EULA is no longer included in the plugin files, but downloading CoreTuff still means you agree to its terms.",
          "The sign has been broken, but the chunk remains claimed.",
          "",
          "Changed: Removed eula.txt. Now plugin will start like regular plugins on first drop.",
        ],
      },
      {
        version: "1.0.0-insider-1",
        date: "2026-03-15",
        notes: [
          "Initial Insider release",
          "Core permission system",
          "Performance monitoring dashboard",
          "Automated backup scheduler",
        ],
      },
    ],
    faq: [
      {
        question: "What Minecraft versions does CoreTuff support?",
        answer: "CoreTuff supports Minecraft 1.20.x through 26.x on Paper servers.",
      },
      {
        question: "Do I need a license for commercial use?",
        answer: "Yes, commercial servers require a paid license. Small community servers can use the free tier.",
      },
    ],
  },
  {
    id: "smokeutils",
    name: "SmokeUtils",
    tagline: "Discord bot made in Python",
    description:
      "SmokeUtils is a Discord bot made in Python. It provides moderation, automation, and community management tools for Discord servers.",
    category: "bot",
    status: "Released",
    version: "0.5.0",
    icon: "/images/smokeutils-logo.png",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    screenshots: ["/images/smokeutils-logo.png"],
    technologies: ["Python", "discord.py", "PostgreSQL", "Redis"],
    features: [
      "Moderation system",
      "Auto-moderation filters",
      "Welcome and farewell messages",
      "Role management",
      "Custom commands",
      "Logging and audit trails",
    ],
    changelog: [],
    faq: [
      {
        question: "Is SmokeUtils free?",
        answer: "SmokeUtils is free for personal Discord servers. Commercial licenses are available.",
      },
    ],
  },
]

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "plugin", label: "Plugins" },
  { id: "bot", label: "Bots" },
  { id: "tool", label: "Tools" },
  { id: "infrastructure", label: "Infrastructure" },
]
