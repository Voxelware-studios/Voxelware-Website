import { BlogPost } from "@/types"

export const blogPosts: BlogPost[] = [
  {
    id: "coretuff-v2-nightly-2",
    title: "CoreTuff v2.0 — Nightly-2",
    description:
      "Nightly-2 is a major step forward for the v2.0 development cycle, focusing heavily on server monitoring, performance awareness, incident tracking, and a much more capable CoreTuff Dashboard.",
    content: `After approximately one month of development, debugging, college, real-life side quests, and several encounters with the "I'll finish this tomorrow" boss fight, CoreTuff v2.0 Nightly-2 is finally here.

Yes, we know.

Nightly-1 was released a month ago.

No, we did not forget about CoreTuff.

College simply decided that CoreTuff needed a little more development time.

We apologize for the delay, and thank you for sticking around while development continued behind the scenes.

Nightly-2 is a major step forward for the v2.0 development cycle, focusing heavily on server monitoring, performance awareness, incident tracking, and a much more capable CoreTuff Dashboard.

## Server Health Monitoring

CoreTuff now continuously monitors the health of your server.

The Dashboard can now display:

* TPS (1m / 5m / 15m)
* MSPT
* CPU usage
* Memory usage
* Player count
* JVM information
* Operating system information
* World count
* Folia status
* Plugin health
* CoreTuff subsystem health
* Integration status
* Recent exceptions

Your server can now basically tell you that something is wrong before you have to stare at the console for 20 minutes wondering what happened.

## Performance Monitoring

CoreTuff now actively watches server performance instead of simply displaying numbers.

Performance monitoring currently tracks:

* TPS
* MSPT
* Memory usage
* CPU usage

Performance conditions must persist for a period of time before an alert is created.

This prevents temporary fluctuations from turning your Dashboard into a panic room.

Performance states include:

* Healthy
* Warning
* Critical

When a performance issue is detected, CoreTuff can automatically create an incident.

When the server recovers, the incident is automatically resolved.

## Performance Alerts

The Performance section has been upgraded with automatic alert states.

Metrics can now indicate:

* Healthy
* Warning
* Critical

The Dashboard receives the server's actual performance state instead of trying to guess it from frontend data.

This means the Web Panel now knows whether a metric is actually problematic rather than simply looking at a number and hoping for the best.

## Incident Management

Introducing the CoreTuff Incident System.

CoreTuff can now automatically detect, track, and resolve important server events.

Incidents can be created for:

* Performance problems
* Database issues
* Configuration events
* Dashboard events
* Dashboard session events
* Module problems
* Integration issues
* Exceptions
* Server events
* CoreTuff events

Each incident maintains its own timeline, severity, status, description, and relevant information.

Incidents can be:

* Detected
* Active
* Recovered

So instead of:

"Something broke."

you can now have:

"Something broke at 19:42, remained broken for 31 seconds, and recovered at 19:43."

Progress.

## Incident Timeline

The CoreTuff Dashboard now includes a complete incident timeline.

Recent events can be viewed directly from the Overview page, while the full timeline provides a more detailed history.

The timeline supports filtering by:

* Severity
* Status
* Subsystem

Incidents are displayed chronologically so administrators can understand what happened and when it happened.

Because "it was lagging earlier" is not exactly a useful incident report.

## Recent Incidents

The Dashboard Overview now includes a Recent Incidents section.

It provides a quick look at the latest server events without requiring administrators to open the full timeline.

Active incidents are highlighted, while recovered incidents remain available for reference.

## Dashboard

The CoreTuff Dashboard is now the central interface for both server monitoring and configuration management.

The Dashboard provides access to:

* Server health
* Performance statistics
* Live configuration management
* Plugin information
* Integration information
* CoreTuff subsystem status
* Incident monitoring
* Server events
* Diagnostics

The previous \`/ct editor\` command has been removed.

It has been replaced by:

\`/ct dash\`

**Permission:** \`coretuff.admin\` *(or OP)*

Running \`/ct dash\` creates a secure Dashboard session and generates a clickable link to the CoreTuff Web Panel.

One command.

One Dashboard.

Much less typing.

## Dashboard Sessions

Dashboard sessions can now be monitored by CoreTuff.

The system can track:

* Session activation
* Connection state
* Disconnection
* Session expiration
* Session closure

When a Dashboard session expires, CoreTuff records the event and reports it through the Dashboard.

The server console also receives a notification when a Dashboard session expires.

No more wondering whether the Dashboard disappeared or just decided to take a vacation.

## Dashboard States

The Dashboard health system now understands additional runtime states.

CoreTuff can distinguish between:

* Running
* Starting
* Stopped
* Error
* Disabled

This provides more accurate health information in the Web Panel.

A browser session disconnecting does not mean the Dashboard module itself has stopped.

Because apparently those are two different things.

## CoreTuff Health

CoreTuff now reports the health of its major subsystems individually.

The Dashboard can display the status of:

* Database
* Configuration
* Dashboard
* Modules
* Exceptions

Each subsystem has its own health state.

This makes it easier to identify exactly which part of CoreTuff is having problems instead of simply being greeted with a mysterious "Warning" badge.

## Plugin Health

The Dashboard now provides information about installed server plugins and their health.

Plugin status can include:

* Enabled
* Disabled
* Dependency problems

This gives administrators a quick overview of the server's plugin environment.

## Integration Detection

CoreTuff's integration system has been improved.

Integrations are now based on actual CoreTuff integration registration rather than simply treating every installed plugin as an integration.

A plugin only appears as a CoreTuff integration when CoreTuff actually detects and uses the relevant API.

Much less:

"Plugin installed = integration."

Much more:

"CoreTuff actually knows what this thing is."

## Web Panel

The CoreTuff Web Panel has been upgraded to:

\`v1.0-Alpha-2\`

The panel now includes the new health monitoring and incident management functionality introduced in Nightly-2.

The Dashboard now goes beyond configuration and provides a centralized view of your server's health and activity.

## Incident Improvements

The incident system now supports different severity levels:

* Info
* Warning
* Critical

Informational events can now be recorded without making the entire server look like it is on fire.

Incident history is also retained with automatic cleanup of older resolved incidents.

## Commands

### \`/ct dash\`

**Permission:** \`coretuff.admin\` *(or OP)*

Creates a secure CoreTuff Dashboard session and provides a clickable link to the Web Panel.

The Dashboard replaces the previous \`/ct editor\` command.

The Dashboard provides:

* Configuration management
* Server monitoring
* Performance information
* Incident monitoring
* Plugin information
* Integration status
* CoreTuff health information

### \`/ct dump\`

**Permission:** \`coretuff.admin.dump\`

Generates a comprehensive diagnostic report containing:

* System information
* Server information
* Runtime statistics
* Database information
* Loaded integrations
* Configuration summary
* Permission information
* Exception history

Designed to simplify troubleshooting and bug reporting.

### \`/ct dumpdata\`

**Permission:** \`coretuff.dump\`

Exports CoreTuff database tables into a readable dump file for debugging and support purposes.

### \`/ct dashboard\`

**Permission:** \`coretuff.admin\` *(or OP)*

Manages the embedded CoreTuff Dashboard.

Available actions include:

* Generate pairing codes
* View Dashboard status
* Restart the Dashboard module

### \`/ct bug\`

**Permission:** \`OP\`

Provides a clickable link to the CoreTuff GitHub Issue Tracker.

Because sometimes the fastest way to fix something is to admit that it is, in fact, broken.

## Console & Event Logging

CoreTuff now provides clearer logging for important state changes.

Examples include:

* Performance degradation
* Performance recovery
* Dashboard session expiration
* Database issues
* Module failures
* Integration changes
* Configuration events

Normal monitoring activity does not flood the server console.

Only meaningful state transitions are logged.

## Fixes

* Fixed performance condition tracking.
* Fixed incident escalation not immediately updating the Dashboard.
* Fixed incident recovery handling.
* Fixed active incident elapsed-time display.
* Improved Dashboard state reporting.
* Improved Dashboard session event handling.
* Improved health data synchronization.
* Improved performance alert accuracy.
* Improved integration detection.
* Improved subsystem health reporting.
* Improved incident history handling.
* Various internal stability improvements.

## What Changed?

Nightly-1 focused heavily on establishing the new CoreTuff Dashboard and configuration experience.

Nightly-2 takes that foundation and turns the Dashboard into something that can actually watch your server.

CoreTuff can now:

Monitor → Detect → Report → Track → Resolve

server health issues automatically.

## A Small Apology

Yes.

It has been a month.

We would like to formally blame:

College.

Assignments.

Exams.

Real life.

And the completely reasonable decision to say:

"I'll just fix this one thing before releasing."

That one thing was, unfortunately, followed by approximately 47 other things.

Thank you for being patient while Nightly-2 took its scenic route to production.

We'd rather release something properly tested than rush a build out just because the calendar looked at us funny.

## Notes

CoreTuff v2.0 Nightly builds are development builds.

Features may change, be expanded, or occasionally decide they no longer understand the concept of software.

If you encounter a problem, please report it through the GitHub Issue Tracker.

GitHub: https://github.com/Voxelware-studios/CoreTuff/issues

Discord: https://discord.gg/tuArC9pTbv

Download: https://modrinth.com/plugin/coretuff

Thank you to everyone testing CoreTuff v2.0.

Welcome to CoreTuff v2.0 Nightly-2.`,
    date: "2026-08-27",
    author: "Voxelware Team",
    tags: ["nightly", "coretuff"],
    readingTime: "12 min read",
    featured: true,
  },
  {
    id: "coretuff-v1-insider-1",
    title: "CoreTuff v1.0 Insider-1",
    description:
      "CoreTuff has officially escaped the Nightly phase and entered the Insider phase.",
    content: `CoreTuff has officially escaped the Nightly phase and entered the Insider phase. This means we've stopped throwing random features into the codebase at 3 AM and pretending it's a development strategy. During the Insider phase, no new features will be added. Instead, we'll spend our time hunting bugs, fixing bugs, and discovering entirely new bugs created while fixing the previous bugs. Welcome to stabilization. Pray for the testers.

## Overview

- First public preview insider build of CoreTuff.
- bStats Integration.
- Bug fixes.

## bStats

We integrated bStats to CoreTuff. Now the public can see plugin usage stats.

## Changes

- Added coretuff.economy.lbignore, which allows players to opt out of the balance leaderboard.

## Bug fix

- CT-01 - Economy plugins unable to hook with CoreTuff via Vault.

## Notes

- CoreTuff has officially entered the Insider phase.
- We have stopped adding shiny new features and started fixing the consequences of adding shiny new features.
- Expect stability improvements, bug fixes, performance optimizations, and the occasional bug that somehow survived six Nightly builds.
- If something breaks, please report it. If nothing breaks, we're just as surprised as you are.
- Back up your database anyway. We trust our code, but not that much.

You can report any bugs in our Issue Tracker. For support join our Discord server. You can download v1.0 Insider-1 on Modrinth.`,
    date: "2026-03-15",
    author: "Voxelware Team",
    tags: ["release", "coretuff", "insider"],
    readingTime: "5 min read",
    featured: false,
  },
  {
    id: "coretuff-v1-nightly-6",
    title: "CoreTuff v1.0 Nightly-6",
    description: "With more features and patches, we present CoreTuff v1.0 Nightly-6.",
    content: `## Overview

- Sixth public development build of CoreTuff.
- Complete package rebrand from net.voxfonix.coreTuff to org.voxelware.coretuff.
- Added full economy system with Vault integration, transaction history, and interest scheduler.
- Added Lands system with persistent homes and warps backed by H2 database.
- Added economy integration for warps (per-warp cost with bypass permission).
- Added Jail system for moderating players with configurable teleport delay and sounds.
- Added Kits system with YAML-based item definitions and per-player cooldowns.
- Added PlaceholderAPI expansion exposing economy, warps, and moderation data.
- Added custom plugin dependency resolver for bootstrapping H2, Configurate, and Lombok.
- Added Modrinth-based update checker.
- Expanded H2 database with 6 new tables for homes, warps, economy, transactions, jails, and jailed players.

## Economy System

Full virtual economy with H2 persistence. Commands: /balance, /pay, /eco with admin controls. Vault integration allows other plugins to use CoreTuff's economy. Features currency configuration, pay tax, interest system, and transaction history.

## Lands System

Homes and warps backed by H2 database. /home, /sethome, /delhome for homes. /warp, /setwarp, /delwarp, /warps for warps. Economy integration with per-warp cost. Configurable teleport delays, sounds, and permission-based limits.

## Jail System

Full moderation jail feature with /setjail, /deljail, /jail commands. H2 tables for jails and jailed_players. Configurable teleport delay, release-on-logout toggle.

## Kits System

YAML-defined kits with cooldowns. /kit and /kits commands. Sample kit "starter" included. Items dropped at feet if inventory is full.

## PlaceholderAPI Expansion

Placeholders for balance, currency, warps, warnings, ban status, and punishment count.

## Notes

- This is a nightly development build, it might be unstable.
- Plugin hide security feature is now opt-in (defaults to false).
- Economy data is stored in H2 database - backup regularly.
- Kit cooldowns are currently in-memory only.`,
    date: "2026-03-10",
    author: "Voxelware Team",
    tags: ["nightly", "coretuff"],
    readingTime: "8 min read",
  },
  {
    id: "coretuff-v1-nightly-5",
    title: "CoreTuff v1.0 Nightly-5",
    description: "With more features and UX update, we present CoreTuff v1.0 Nightly-5.",
    content: `## Overview

- Fifth public development build of CoreTuff.
- Added workbench UI menu commands.
- Added a full security layer for command hiding and plugin concealment.
- Added addon loading support.
- Added configurable sounds for utility, teleportation, and moderation flows.
- Split the old single core config into multiple config files.

## Additions

Workbenches UI menu commands: /crafting, /anvil, /stonecutter, /smithing, /loom, /cartography, /enchanting, /grindstone. Utility commands: /hat. Plugin hide security (Beta) - disable /pl, /plugin for players. Addon framework support. Configurable sounds. Configuration split into teleportconfig.yml, securityconfig.yml, utilityconfig.yml, modconfig.yml.

## Changes

RTP now checks for generated chunks to avoid sudden spike in load.

## Bug fix

Players were able to use teleport command without permission (Fixed).

## Notes

- Plugin hide security feature is in beta.
- We highly recommend you to go through new config files.`,
    date: "2026-03-05",
    author: "Voxelware Team",
    tags: ["nightly", "coretuff"],
    readingTime: "6 min read",
  },
  {
    id: "coretuff-v1-nightly-4",
    title: "CoreTuff v1.0 Nightly-4",
    description: "With Critical Bug fix and minor changes, we present CoreTuff v1.0 Nightly-4.",
    content: `## Overview

- Fourth public development build of CoreTuff.
- Critical Bug fix and minor changes.

## Changes

- Added /coretuff reload (/ct reload) to reload configs.
- Users cannot self warn / tempban / ban / kick / ban-ip and cannot punish server ops.
- CoreTuff now overrides plugin with similar commands.
- Ops can bypass cooldowns.
- Moderation Durations: s (seconds), m (minutes), h (hours), d (days), w (week), mo (month).
- Added /pardon to unban player with their name.

## Bug fix

- When player uses rtp in nether they get teleported to nether roof (Fixed).
- Permission keys are not shown in permission plugins (Fixed).

## Notes

- This is a nightly development build, it might be unstable.
- You can report any bugs in our Discord.`,
    date: "2026-02-28",
    author: "Voxelware Team",
    tags: ["nightly", "coretuff"],
    readingTime: "3 min read",
  },
  {
    id: "coretuff-v1-nightly-3",
    title: "CoreTuff v1.0 Nightly-3",
    description: "With moderation framework, we present CoreTuff v1.0 Nightly-3.",
    content: `## Overview

- Third public development build of CoreTuff.
- Major moderation and punishment system overhaul.
- Improved Bedrock/Geyser compatibility.
- Added highly customizable moderation configuration system.

## Major Features

Complete moderation framework: /ban, /tempban, /ban-ip, /kick, /warn. Warning severity and escalation system (low, medium, high). Punishment history, status and ID system. Automatic tempban expiration handling. /pid punishment management command. Synchronization between banned-players.json, banned-ips.json, and CoreTuff moderation database. Bedrock/Geyser-compatible punishment formatter. World-specific RTP support.

## Warning System

Configurable warning points: low=1, medium=2, high=3. Warning decay system, automatic punishments, warning history persistence.

## Internal Improvements

H2-based punishment database architecture. Punishment schema migration support. Improved moderation synchronization systems.

## Notes

- Existing vanilla bans are automatically imported into CoreTuff database.
- New moderation files are stored in plugins/CoreTuff/Core/.
- This is a nightly development build, it might be unstable.`,
    date: "2026-02-20",
    author: "Voxelware Team",
    tags: ["nightly", "coretuff"],
    readingTime: "6 min read",
  },
  {
    id: "coretuff-v1-nightly-2",
    title: "CoreTuff v1.0 Nightly-2",
    description: "With quick but important patches, we present CoreTuff v1.0 Nightly-2.",
    content: `## Overview

- Second public development build of CoreTuff.

## Major Features

- Added Teleport countdown (for all teleportation oriented commands).
- Renamed /hunger command to /feed.
- Changed all permission keys.
- Added player field for /gmc, /gma, /gms, /gmsp, /heal, /feed.
- Integrated Placeholder API with CoreTuff.
- Added prefix for plugin messages. Can be configured in config.yml.
- Updated from Paper API 1.21 to 26.1.
- Updated from Java 21 to 25.

## New Permissions

Restructured permission tree: coretuff.gamemode.*, coretuff.utility.*, coretuff.teleportation.*

## Notes

- To use command with player field you need .others permission.
- If you currently use Nightly 1 we recommend you delete config.yml and eula.txt to regenerate.
- DO NOT DELETE database.mv.db.
- This is a nightly development build, it might be unstable.`,
    date: "2026-02-12",
    author: "Voxelware Team",
    tags: ["nightly", "coretuff"],
    readingTime: "4 min read",
  },
  {
    id: "coretuff-v1-nightly-1",
    title: "CoreTuff v1.0 Nightly-1",
    description:
      "After extensive development, refinement, and feature expansion, we proudly present CoreTuff v1.0 Nightly-1.",
    content: `## Overview

- First public development build of CoreTuff.
- Core systems implemented and under active development.

## Major Features

Teleportation system including /tpask, /tpaccept, /tpdeny, and /tphere. Random Teleport (/rtp) with safe location detection and biome filtering. Back system (/back) to return to previous locations. Ignore system to block teleport requests.

## EULA System

Added EULA enforcement system. Plugin generates eula.txt on first startup. Plugin will not enable until user sets accepted: true.

## Commands

/tpask (aliases: /tpa), /tpaccept (/tpac), /tpdeny (/tpd), /tpignore (/tpig), /tpuignore (/tpuig), /tphere (/tph). Utility commands: /fly, /heal, /hunger, /gmc, /gms, /gma, /gmsp.

## Folia and Paper Support

Compatible with both Paper and Folia. Uses thread-safe execution handling.

## Database

H2 database integration for ignore system persistence.

## Notes

- This is a nightly development build, it might be unstable.
- You can download v1.0 Nightly-1 on Hangar.`,
    date: "2026-02-05",
    author: "Voxelware Team",
    tags: ["nightly", "coretuff"],
    readingTime: "5 min read",
  },
  {
    id: "smokeutils-lite-release",
    title: "The release of SmokeUtils Lite",
    description:
      "We are Happy to announce the release of SmokeUtils Lite!",
    content: `## The release

We are Happy to announce the release of SmokeUtils Lite!

## What is SmokeUtils Lite?

SmokeUtils Lite is an open source version of SmokeUtils and like you guessed it is a Lighter Version of SmokeUtils.

## Why does it exist?

A lot of people have been asking for SmokeUtils to be open source but due to very important business decisions we unfortunately can't. So instead of making it entirely open source we made a lite version and made that open source.

## What's Next?

We are planning new features and improvements to SmokeUtils and YOU, yes YOU can help us by contributing to the project!

Planned features:
- More fun commands.
- More moderation commands.
- And even more features!

## Looking Forward

We're committed to continuously improving SmokeUtils Lite and providing the best possible experience for our users. We have more exciting features and updates planned for the future, so stay tuned!

Thank you for being part of the Voxelware Studios community. Happy Discord experience!`,
    date: "2026-01-20",
    author: "Voxelware Team",
    tags: ["release", "smokeutils"],
    readingTime: "4 min read",
  },
  {
    id: "smokeutils-update-v030",
    title: "SmokeUtils Update v0.3.0",
    description:
      "We've been working hard to add some much-needed features to SmokeUtils, adding functionality that was previously missing in the v0.1.9 code rework.",
    content: `## Adding missing features

We've been working hard to add some much-needed features to SmokeUtils, adding functionality that was previously missing in the v0.1.9 code rework.

## What is the v0.1.9 code rework?

In the past we used to suffer from technical debt and hard development, which led to slower development and more problems. In the v0.1.9 code rework, we've completely remade the bot code but we forgot to include a lot of features from the previous version.

## Feature refinements and bug fixes

In addition to adding new features, we've also been busy refining existing ones and fixing bugs to ensure a smoother experience for our users. We've addressed several issues that were reported by the community and made improvements based on user feedback.

For example, we've fixed a bug where /cat didn't work at all, and we've optimised the bot to use only 38MB of RAM when idle instead of the previous 50MB.

## What's New?

- Fixed /cat command not working.
- Optimised the bot to use less RAM when idle.
- Added back the /calc command.
- Added back the /servericon command.
- Improved the /skull command.
- Added /lock and /unlock commands that can lock and unlock channels.
- Fixed various bugs and issues reported by the community.

## Looking Forward

We're committed to continuously improving SmokeUtils and providing the best possible experience for our users. We have more exciting features and updates planned for the future, so stay tuned!

Thank you for being part of the Voxelware Studios community. Happy Discord experience!`,
    date: "2026-02-01",
    author: "Voxelware Team",
    tags: ["update", "smokeutils"],
    readingTime: "5 min read",
    featured: false,
  },
  {
    id: "website-update-v120",
    title: "Voxelware Studios Website Update v1.2.0",
    description:
      "We just updated our website with some exciting new features! We added a new blog section and improved the user interface and more.",
    content: `## Building a Better User Experience

We're excited to announce a major update to the Voxelware Studios website! This release represents months of work dedicated to improving how users interact with our platform. We've focused on making the site faster, more intuitive, and accessible across all devices.

## UI Improvements & Visual Refinements

We invested significant effort into refining every visual element of the site. Color schemes were carefully selected for better contrast and accessibility, typography was improved for better readability, and spacing was optimized throughout. Interactive elements now have smooth transitions and hover states that provide clear visual feedback.

Our updated component library ensures consistency across all pages. Whether you're on the projects page, reading a blog post, or contacting us, you'll experience a unified design language that feels polished and professional.

## Performance Enhancements

Alongside visual improvements, we optimized the underlying code and asset delivery. Pages load faster, transitions are smoother, and the overall browsing experience is snappier. We've also improved our navigation structure to help users find what they're looking for more quickly.

## What's New

- Fully responsive navigation bar that adapts to all screen sizes.
- Enhanced blog section with better readability and typography.
- Improved project showcase with optimized imagery.
- Refined contact form with better usability.
- Smoother animations and transitions throughout the site.
- Better accessibility standards for all users.

## Looking Forward

This update is just the beginning. We're committed to continuously improving the Voxelware Studios experience based on user feedback. If you encounter any issues or have suggestions for improvements, we'd love to hear from you.

Thank you for being part of the Voxelware Studios community. Happy browsing!`,
    date: "2026-01-10",
    author: "Voxelware Team",
    tags: ["announcement", "website", "update"],
    readingTime: "4 min read",
  },
  {
    id: "website-update",
    title: "New Update for the website",
    description:
      "We just updated our website with some exciting new features! We added a new projects page and improved the user interface and more.",
    content: `## Improving consistency

We've been working hard to improve the consistency of our website and provide a better user experience.

## Consistency Refinements and content updates

We've made several improvements to ensure a more consistent and user-friendly experience across our website. For example, we've made the footer be in every page, and we've made a new projects page.

## Contribution news

We don't usually mention specific contributions, but this time we will! Thanks to Kyronx/KyronCore for adding a new readme to the GitHub repository.

## What's New?

- Added a new projects page.
- Added a consistent footer to all pages.
- Improved the user interface and design of the website.
- Added more content and information about our services and projects.
- Blogs now use a single CSS file.
- Fixed various bugs and issues reported by the community.

## Looking Forward

We're committed to continuously improving our website and providing the best possible experience for our users. We have more exciting features and updates planned for the future, so stay tuned!

Thank you for being part of the Voxelware Studios community. Happy browsing!`,
    date: "2026-01-15",
    author: "Voxelware Team",
    tags: ["announcement", "website"],
    readingTime: "3 min read",
  },
  {
    id: "coretuff-v1-rc1",
    title: "CoreTuff v1.0-RC1 — Release Candidate",
    description:
      "CoreTuff has officially entered the Release Candidate phase. RC1 focuses entirely on stability, correctness, and reliability as we prepare for the 1.0 release.",
    content: `CoreTuff has officially entered the **Release Candidate** phase.

No new features have been added in this build. RC1 focuses entirely on stability, correctness, and reliability as we prepare for the 1.0 release.

Unless critical issues are discovered, this build is expected to become the foundation of CoreTuff 1.0.

**Planned Release Date:** **16 June 2026**

If no critical bugs are reported during the RC testing period, CoreTuff 1.0 is expected to be released on **16 June 2026**.

## Fixed

### Interest Scheduler Thread Safety

**Fixed:** Interest payouts were executed asynchronously on non-Folia servers.

\`applyInterest()\` interacts with Bukkit APIs such as online player iteration and player messaging, which must run on the main server thread. The scheduler has been moved to a synchronous task to ensure thread safety and prevent potential concurrency issues.

### Folia Countdown Titles

**Fixed:** Countdown title tasks would never execute on Folia.

The scheduler was using an incorrect overload, causing countdown tasks to be silently ignored. The countdown system now properly executes and reschedules itself on Folia servers.

### Economy OfflinePlayer Handling

**Fixed:** Unsafe \`OfflinePlayer\` → \`Player\` casting in the economy service.

Replaced direct casting with a null-safe player lookup to prevent potential \`ClassCastException\`s when handling offline players.

### Database Resource Leaks

**Fixed:** JDBC resources were not being properly released in several repository implementations.

Applied try-with-resources across the database layer, ensuring all \`PreparedStatement\` and \`ResultSet\` instances are correctly closed after use.

Affected repositories:

* EconomyRepository
* HomeRepository
* WarpRepository
* TransactionRepository

This improves long-term database stability and prevents cursor/resource leaks during extended server uptime.

## Notes

* CoreTuff has officially entered the Release Candidate phase.
* Feature development is now frozen.
* Focus is now on bug fixes, stability improvements, and release readiness.
* If something breaks, please report it. If nothing breaks, we're getting suspicious.
* The EULA file may have disappeared, but by downloading CoreTuff you are still agreeing to its terms. The sign has been broken, but the chunk remains claimed.

You can report bugs in our Issue tracker: https://github.com/Voxelware-studios/CoreTuff/issues
For support join our discord server: https://discord.gg/tuArC9pTbv
Download:  https://modrinth.com/plugin/coretuff`,
    date: "2026-06-14",
    author: "Voxelware Team",
    tags: ["release", "coretuff", "rc"],
    readingTime: "5 min read",
    featured: true,
  },
  {
    id: "coretuff-v1-insider-2",
    title: "CoreTuff v1.0 Insider-2 - Preview Build Changelog",
    description:
      "In the spirit of the Insider phase, we removed one more file than strictly necessary.",
    content: `In the spirit of the Insider phase, we removed one more file than strictly necessary.

The EULA is no longer included in the plugin files, but downloading CoreTuff still means you agree to its terms.

The sign has been broken, but the chunk remains claimed.

## Changed

* Removed eula.txt. Now plugin will start like regular plugins on first drop.

## Notes

* *Do you expect notes for this tiny change?*

You can report bugs in our Issue tracker: https://github.com/Voxelware-studios/CoreTuff/issues
For support join our discord server: https://discord.gg/tuArC9pTbv
Download:  https://modrinth.com/plugin/coretuff`,
    date: "2026-05-01",
    author: "Voxelware Team",
    tags: ["release", "coretuff", "insider"],
    readingTime: "2 min read",
    featured: false,
  },
  {
    id: "coretuff-v1-release",
    title: "CoreTuff v1.0 — Official Release",
    description:
      "After multiple Nightly builds, Insider testing, and the Release Candidate phase, CoreTuff 1.0 is now officially released.",
    content: `After multiple Nightly builds, Insider testing, and the Release Candidate phase, CoreTuff 1.0 is now officially released.

CoreTuff is a comprehensive utility plugin for Paper and Folia servers, designed to provide server management, moderation, economy, teleportation, and utility features in a single plugin.

## Included Systems

### Teleportation

* \`/tpa\`, \`/tphere\`, \`/tpaccept\`, \`/tpdeny\`
* \`/tpignore\`, \`/tpunignore\`
* \`/back\`
* \`/rtp\`

Features include configurable cooldowns, movement cancellation, countdown titles, sound effects, and Folia-compatible teleport handling.

### Economy

* \`/balance\`
* \`/pay\`
* \`/eco\`

Features:

* H2-backed persistent balances
* Transfer taxes
* Interest accumulation
* Transaction logging
* Balance leaderboard
* Vault integration
* Configurable currency formatting and limits

Vault registration automatically supports Vault-based plugins such as EconomyShopGUI and AuctionHouse.

### Lands

Homes and Warps with:

* Persistent H2 storage
* Configurable delays
* Permission-based limits
* Economy integration for warps

### Moderation

Includes:

* Ban
* Tempban
* IP Ban
* Kick
* Warn
* Pardon
* Punishment ID management

Additional features:

* Automatic warning decay
* Automatic punishment thresholds
* Online and offline mode support
* Vanilla ban synchronization
* Bedrock player detection
* Configurable moderation actions and sounds

### Jail System

* Persistent jail locations
* Time-based jail tracking
* Configurable release behaviour

### Kits

* YAML-defined kits
* Cooldowns
* Player targeting support

### Utility Commands

* Gamemode shortcuts
* Fly
* Heal
* Feed
* Hat

### Virtual Workbenches

* Crafting Table
* Anvil
* Stonecutter
* Smithing Table
* Loom
* Cartography Table
* Enchanting Table
* Grindstone

### Security

* Plugin hiding system
* Command hiding via ProtocolLib
* Permission-aware command visibility
* Optional plugin visibility controls

### Addon Platform

* Automatic addon discovery
* Lifecycle management
* Addon context access
* Plugin-style extension support

### PlaceholderAPI

Built-in PlaceholderAPI integration including economy placeholders and additional CoreTuff expansion data.

### Platform Support

* Paper 1.21.5
* Folia
* Java 25
* H2 Database
* Vault
* PlaceholderAPI
* ProtocolLib
* PacketEvents

Optional dependencies are automatically detected and integrated when available.

### Stability & Reliability

CoreTuff 1.0 includes:

* Thread-safety fixes for economy interest processing
* Folia scheduler compatibility fixes
* OfflinePlayer handling improvements
* Database resource leak fixes
* Update notification improvements
* Vault integration stabilization
* Startup initialization ordering improvements

### Notes

* CoreTuff 1.0 is the first stable release.
* Existing RC1 databases and configurations remain compatible.

Thank you to everyone who tested Nightly, Insider, and Release Candidate builds and helped shape the first stable release of CoreTuff.

You can report bugs in our Issue tracker: https://github.com/Voxelware-studios/CoreTuff/issues
For support join our discord server: https://discord.gg/tuArC9pTbv
Download:  https://modrinth.com/plugin/coretuff

Welcome to CoreTuff 1.0.`,
    date: "2026-06-16",
    author: "Voxelware Team",
    tags: ["release", "coretuff"],
    readingTime: "8 min read",
    featured: true,
  },
  {
    id: "coretuff-v2-nightly-1",
    title: "CoreTuff v2.0 Nightly-1",
    description:
      "After months of development, CoreTuff enters its next major chapter with the first Nightly build of v2.0.",
    content: `After months of development, CoreTuff enters its next major chapter with the first Nightly build of v2.0.

This release focuses on rebuilding CoreTuff from the ground up, introducing a completely new configuration system, the first public preview of the CoreTuff Web Panel, a remote configuration editor, and a stronger foundation for future updates.

As this is a Nightly build, features are still under active development and may change before the stable release.

## Configuration System

CoreTuff no longer relies on multiple YAML configuration files.

Configuration is now managed through a centralized embedded database, providing:

• Faster configuration loading
• Centralized configuration management
• Dynamic settings
• Improved reliability
• Better scalability for future updates

The old YAML configuration system has been retired as part of this overhaul.

## Web Panel (Alpha)

The first public preview of the CoreTuff Web Panel is now available.

Current features include:

• Browser-based configuration management
• Dynamic settings editor
• Live configuration updates
• Session-based editing
• Automatic validation
• Modern responsive interface

Configuration can now be edited directly from your browser using a secure editing session started from in-game.

## Diagnostic System

A brand-new diagnostics framework has been added to simplify troubleshooting and support.

Diagnostic reports now include:

• Server information
• Runtime statistics
• Database information
• Loaded integrations
• Configuration summary
• Exception history

Useful for both administrators and bug reports.

## Core Commands

CoreTuff v2.0 introduces several new management commands under \`/ct\`, making administration, diagnostics, and configuration easier than ever.

### Diagnostics

\`/ct dump\`
**Permission:** \`coretuff.admin.dump\`

Generates a comprehensive diagnostic report containing:

• System information
• Server information
• Runtime statistics
• Database information
• Loaded integrations
• Configuration summary
• Permission information
• Exception history

Designed to simplify troubleshooting and bug reporting.

\`/ct dumpdata\`
**Permission:** \`coretuff.dump\`

Exports all CoreTuff database tables into a readable dump file for debugging and support purposes.

### Web Editor

\`/ct editor\`
**Permission:** \`coretuff.admin\` *(or OP)*

Launches a secure Web Editor session and generates a clickable link that opens the CoreTuff Web Panel in your browser.

Edit configuration live through the browser with automatic validation and instant application of changes.

### Dashboard

\`/ct dashboard\`
**Permission:** \`coretuff.admin\` *(or OP)*

Manage the CoreTuff Dashboard directly from Minecraft.

Available actions include:

• Generate pairing codes
• View dashboard status
• Restart the dashboard module

### Bug Reporting

\`/ct bug\`
**Permission:** \`OP\`

Instantly opens the CoreTuff GitHub Issue Tracker, making it easier to report bugs and request new features.

## Improvements

CoreTuff v2.0 also includes one of the largest internal refactors since development began.

Highlights include:

• Faster configuration loading
• Reduced filesystem dependency
• Improved initialization
• Better module separation
• Improved maintainability
• Better foundation for future features

## Fixes

• Reduced unnecessary Web Editor log messages.
• Various stability improvements.
• Multiple internal bug fixes.

## Notes

This is the first Nightly build of the CoreTuff 2.0 development cycle.

Nightly builds are intended for testing and may contain unfinished features or bugs.

If you encounter any issues, please report them on our GitHub Issue Tracker.

GitHub: https://github.com/Voxelware-studios/CoreTuff/issues

Discord:
https://discord.gg/tuArC9pTbv

Download:
https://modrinth.com/plugin/coretuff

Thank you for helping shape the future of CoreTuff.

Welcome to CoreTuff 2.0 Nightly.`,
    date: "2026-07-26",
    author: "Voxelware Team",
    tags: ["nightly", "coretuff"],
    readingTime: "8 min read",
    featured: true,
  },
]

export const blogTags = [
  "release",
  "nightly",
  "coretuff",
  "smokeutils",
  "update",
  "insider",
  "announcement",
  "website",
]
