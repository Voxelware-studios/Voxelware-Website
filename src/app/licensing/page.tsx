"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Search,
  FileText,
  Scale,
  Ban,
  Globe,
  Lock,
  AlertTriangle,
  Info,
  Shield,
  Gavel,
  Eye,
  RefreshCw,
  BookOpen,
  Heart,
  Terminal,
  Code,
  Users,
  DollarSign,
  Copyright,
  ChevronDown,
  ChevronUp,
  Copy,
  Download,
  Check,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { PageTransition } from "@/components/shared/page-transition"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { MeshGradient } from "@/components/shared/mesh-gradient"

type LicenseType = "proprietary" | "community"

const proprietarySections = [
  {
    id: "grant-of-license",
    title: "1. Grant of License",
    icon: Scale,
    content: `Voxelware Studios grants the user a limited, non-exclusive, non-transferable, and revocable license to use the Software ("Software") for personal or commercial purposes, subject to the terms outlined in this License.`,
  },
  {
    id: "ownership",
    title: "2. Ownership",
    icon: Shield,
    content: `The Software is licensed, not sold. All rights, title, and interest in and to the Software, including all intellectual property rights, remain the exclusive property of Voxelware Studios.`,
  },
  {
    id: "free-and-premium",
    title: "3. Free and Premium Versions",
    icon: Heart,
    content: `The Software may be distributed in both free and premium versions.

3.1 Free Version
The free version of the Software may be used without payment, subject to the following conditions:
• You may not modify, decompile, or create derivative works from the free version.
• You may not remove branding, credits, or license information.
• The free version may have limited features compared to the premium version.

3.2 Premium Version
The premium version of the Software requires a valid purchase and is subject to stricter restrictions:
• Redistribution, resale, or sharing of the premium Software or license is strictly prohibited.
• Access is limited to the licensed individual or organization only.`,
  },
  {
    id: "restrictions",
    title: "4. Restrictions",
    icon: Ban,
    content: `You are strictly prohibited from:
• Decompiling, reverse engineering, disassembling, or attempting to derive the source code of the Software.
• Modifying, altering, or creating derivative works based on the Software.
• Redistributing, reselling, sublicensing, leasing, sharing, or otherwise transferring the Software or any license key to any third party (except where explicitly allowed for the free version).
• Removing, altering, or obscuring any proprietary notices or labels on the Software.`,
  },
  {
    id: "closed-source",
    title: "5. Closed Source Notice",
    icon: Terminal,
    content: `This Software is proprietary and closed-source. Access to source code is not provided under any circumstances unless explicitly authorized in writing by Voxelware Studios.`,
  },
  {
    id: "license-usage",
    title: "6. License Usage",
    icon: BookOpen,
    content: `Each purchased license is intended for use by a single individual or organization. Unauthorized sharing or distribution of license credentials is strictly prohibited and may result in termination of the license.`,
  },
  {
    id: "integrity",
    title: "7. Integrity and Security",
    icon: Shield,
    content: `Voxelware Studios develops the Software with the intent to be safe and secure. The Software does not intentionally contain malicious code, malware, or harmful components.`,
  },
  {
    id: "license-validation",
    title: "8. License Validation",
    icon: Lock,
    content: `Voxelware Studios reserves the right to implement license validation mechanisms within the Software. This may include online verification to confirm the authenticity and validity of a purchased license.

The Software may periodically communicate with Voxelware Studios' servers for the purpose of license verification. Failure to pass validation may result in restricted functionality or termination of access.`,
  },
  {
    id: "data-collection",
    title: "9. Data Collection and IP Logging",
    icon: Eye,
    content: `To protect against unauthorized usage and distribution, the Software may collect limited technical information, including but not limited to:
• Public IP address
• Server identifier, installation identifier, or device identifier
• Discord User ID, Discord Guild ID, or other platform-specific identifiers (where applicable)
• Software version and license status

This data is collected solely for:
• License validation
• Security
• Anti-piracy enforcement
• Product analytics and diagnostics

By using the Software, you consent to this data collection.

Voxelware Studios does not sell collected data to third parties except where required by law.`,
  },
  {
    id: "anti-piracy",
    title: "10. Anti-Leak and Anti-Piracy Enforcement",
    icon: AlertTriangle,
    content: `Any unauthorized distribution, leaking, sharing, or publication of the Software, whether modified or unmodified, is strictly prohibited.

Voxelware Studios reserves the right to:
• Revoke licenses associated with suspected unauthorized distribution
• Blacklist servers or users found violating this License
• Take legal action against individuals or entities involved in piracy or redistribution`,
  },
  {
    id: "tampering",
    title: "11. Tampering and Bypass Prohibition",
    icon: Ban,
    content: `You may not attempt to bypass, disable, or interfere with any license validation, security, or anti-piracy mechanisms implemented within the Software.

Any such attempt will be considered a violation of this License and may result in immediate termination of access and further action.`,
  },
  {
    id: "no-warranty",
    title: "12. No Warranty",
    icon: Info,
    content: `The Software is provided "AS IS", without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.

Voxelware Studios does not guarantee that the Software will be error-free or uninterrupted.`,
  },
  {
    id: "limitation-of-liability",
    title: "13. Limitation of Liability",
    icon: AlertTriangle,
    content: `In no event shall Voxelware Studios be liable for any damages, including but not limited to:
• Loss of data
• Loss of profits
• Server downtime
• Indirect, incidental, or consequential damages

arising from the use or inability to use the Software.`,
  },
  {
    id: "termination",
    title: "14. Termination",
    icon: Gavel,
    content: `This License is effective until terminated. It will terminate automatically if you fail to comply with any of its terms. Upon termination, you must cease all use of the Software and delete all copies.`,
  },
  {
    id: "enforcement",
    title: "15. Enforcement",
    icon: Gavel,
    content: `Voxelware Studios reserves the right to take legal action against individuals or entities that violate this License.`,
  },
  {
    id: "investigation",
    title: "16. Investigation Rights",
    icon: Eye,
    content: `Voxelware Studios reserves the right to investigate suspected violations of this License.

Failure to cooperate with reasonable requests related to license verification or anti-piracy investigations may result in suspension or termination of the license.`,
  },
  {
    id: "updates",
    title: "17. Updates and Changes",
    icon: RefreshCw,
    content: `Voxelware Studios reserves the right to modify or update this License.

Users will be notified of significant changes where reasonably possible. Continued use of the Software after such changes constitutes acceptance of the updated terms.

If you do not agree to the updated terms, you must discontinue use of the Software.`,
  },
  {
    id: "severability",
    title: "18. Severability",
    icon: FileText,
    content: `If any provision of this License is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.`,
  },
  {
    id: "entire-agreement",
    title: "19. Entire Agreement",
    icon: BookOpen,
    content: `This License constitutes the entire agreement between the user and Voxelware Studios regarding the Software and supersedes any prior agreements or understandings.`,
  },
  {
    id: "governing-law",
    title: "20. Governing Law",
    icon: Globe,
    content: `This License shall be governed and interpreted in accordance with the laws of India unless otherwise specified by Voxelware Studios.`,
  },
  {
    id: "changes-in-v11",
    title: "21. Changes in v1.1",
    icon: RefreshCw,
    content: `• Generalized the license for all Voxelware software.
• Added Discord bot and platform identifier coverage.
• Expanded data collection provisions.
• Clarified anti-piracy and license validation terms.
• Updated governing law language.
• Renamed Audit Rights to Investigation Rights.`,
  },
]

const communitySections = [
  {
    id: "definitions",
    title: "1. Definitions",
    icon: FileText,
    content: `"Software" means the Voxelware Studios Community Edition ("CE") project or component distributed under this License.

"Original Author" means the individual or organization identified in the Software's copyright notice or official project documentation as the original author or copyright holder of the Software.

"Voxelware" means Voxelware Studios, the publisher and steward of this License.

"Original Software" means the Software as originally distributed by the Original Author.

"Derivative Work" means any modified, forked, ported, adapted, extended, or otherwise derived version of the Software that contains or is based substantially upon the Software's code.

"Redistribution" means making the Software or a Derivative Work available to another person or entity, including through downloads, repositories, mirrors, package managers, compiled builds, or other distribution methods.`,
  },
  {
    id: "permission",
    title: "2. Permission",
    icon: Scale,
    content: `Subject to the terms and conditions of this License, the Original Author and Voxelware grant you a limited, non-exclusive, worldwide license to:

• Use the Software.
• View and study the source code.
• Modify the Software.
• Compile and build the Software.
• Create private forks and Derivative Works.
• Create and distribute Derivative Works in accordance with this License.
• Submit modifications, fixes, documentation, and other contributions to the official project.

All rights not expressly granted by this License are reserved by the Original Author and/or Voxelware, as applicable.`,
  },
  {
    id: "credits-attribution",
    title: "3. Credits and Attribution",
    icon: Info,
    content: `All copies and Derivative Works must retain:

• The original copyright notices.
• This License.
• Clear attribution to the Original Author.
• Clear attribution to the applicable Voxelware CE project.

A Redistributed Derivative Work must clearly and prominently state that it is derived from the Original Software.

The attribution must be reasonably visible to normal users and must not be intentionally hidden, removed, or altered in a manner intended to conceal the origin of the Software.

At minimum, a Derivative Work should include a statement substantially similar to:

"This project is a derivative work of [PROJECT NAME] by [ORIGINAL AUTHOR] and is licensed under the Voxelware Community License."`,
  },
  {
    id: "forking-rebranding",
    title: "4. Forking and Rebranding",
    icon: Users,
    content: `Forking, modifying, and rebranding the Software is permitted provided that all requirements of this License are followed.

A Derivative Work may use its own project name, branding, and identity, provided that it clearly informs users that it is a Derivative Work of the Original Software.

A Derivative Work must not:

• Present itself as the Original Software.
• Claim to be an official release of the Original Author or Voxelware.
• Imply endorsement, sponsorship, or affiliation with the Original Author or Voxelware without permission.
• Remove required attribution.
• Intentionally conceal its origin from users.

The names, logos, trademarks, and branding belonging to Voxelware, the Original Author, or the Software may be used for truthful attribution where permitted, but may not be used in advertising or marketing in a manner that implies official endorsement.`,
  },
  {
    id: "package-namespace",
    title: "5. Package and Namespace",
    icon: Code,
    content: `The original package names and namespaces of the Software must not be renamed, removed, or replaced in a Redistributed Derivative Work.

Changing package names or namespaces does not remove the requirement to identify the Derivative Work as being based upon the Original Software.

Private modifications may be made for internal purposes, but no such modification grants permission to misrepresent or conceal the origin of the Software when it is subsequently Redistributed.`,
  },
  {
    id: "redistribution",
    title: "6. Redistribution",
    icon: Globe,
    content: `Redistribution of any Voxelware Community Edition Software or Derivative Work is permitted only when all requirements of this License are followed.

Any person or organization Redistributing a CE Software or Derivative Work must make the complete corresponding source code publicly available in a Git repository that is accessible to users of the Redistributed Software.

The public repository must contain sufficient source code to reproduce the Redistributed Software, including applicable modifications made to the Voxelware CE Software.

Any Redistributed copy or Derivative Work must:

• Include this License.
• Preserve all required copyright notices.
• Provide clear attribution to the Original Author.
• Identify the applicable Voxelware CE project.
• Clearly identify itself as a Derivative Work where applicable.
• Provide a public Git repository containing the corresponding source code.
• Comply with all other requirements of this License.

Redistribution without publicly available corresponding source code is prohibited.

The source repository must not intentionally omit modifications or other covered source code in order to conceal the origin or functionality of the Redistributed Software.`,
  },
  {
    id: "same-license",
    title: "7. Same-License Requirement",
    icon: Scale,
    content: `Any Derivative Work containing or substantially based upon code covered by this License and distributed to another person or entity must itself be distributed under the Voxelware Community License (VCL).

The distributor must provide recipients with the rights and restrictions of this License.

A Derivative Work may not be distributed under another license, including MIT, Apache, GNU GPL, BSD, or a proprietary/custom license, where doing so would remove, conflict with, or bypass the requirements of this License.

Third-party components that are not covered by this License remain subject to their respective licenses.`,
  },
  {
    id: "commercial-use",
    title: "8. Commercial Use and Monetization",
    icon: DollarSign,
    content: `Private or internal commercial use of the Software is permitted.

However, the Software and any Derivative Work may not be sold, rented, leased, sublicensed, monetized, or otherwise commercially exploited without prior written permission from the Original Author and/or Voxelware, as applicable.

In particular, a fork or Derivative Work may not:

• Be sold as a paid download.
• Be offered through a paid subscription.
• Be placed behind a paywall.
• Be monetized through advertisements, donations, sponsorships, or similar mechanisms where the fork or Derivative Work itself is the subject of the monetized offering.
• Be bundled into a paid software product for the purpose of commercially exploiting the Derivative Work.
• Be commercially licensed or sublicensed.

Voxelware and the Original Author retain the right to commercially distribute, license, monetize, or offer premium versions of their respective Software.`,
  },
  {
    id: "reputation-enforcement",
    title: "9. Reputation, Impersonation, Malicious Use, and Enforcement",
    icon: Shield,
    content: `The Software and Derivative Works may not intentionally be used to:

• Impersonate Voxelware, the Original Author, or an official project.
• Deceive users regarding the origin or authorship of the Software.
• Distribute malicious functionality while falsely attributing it to Voxelware or the Original Author.
• Intentionally conceal substantial copying of the Software.
• Intentionally misrepresent a Derivative Work as the Original Software.
• Intentionally damage the integrity of the Software or falsely associate harmful activity with the Original Author or Voxelware.

Voxelware Studios reserves the right to request the removal or cessation of any Fork, Redistribution, or Derivative Work where Voxelware reasonably determines that its continued distribution:

• Violates this License;
• Creates a significant risk of harm to users or the Software;
• Misrepresents Voxelware, the Original Author, or the Software;
• Infringes or threatens Voxelware's intellectual-property rights;
• Circumvents the commercial or licensing restrictions of this License;
• Materially interferes with Voxelware's legitimate commercial offerings or monetization of the Software; or
• Otherwise creates a substantial and legitimate concern regarding the protection, integrity, security, or sustainability of the Voxelware CE ecosystem.

Where appropriate and legally available, Voxelware may request hosting providers, repository providers, distributors, or other relevant parties to remove or disable access to the violating material.

Voxelware Studios reserves the right to take appropriate legal action and pursue any remedies available under applicable law.

Nothing in this section grants Voxelware the right to remove a Derivative Work solely because Voxelware disagrees with criticism, opinions, reviews, or lawful commentary concerning the Software.`,
  },
  {
    id: "upstream-integration",
    title: "10. Upstream Integration and Contributions",
    icon: RefreshCw,
    content: `By submitting code, documentation, fixes, or other contributions to an official Voxelware CE project, you grant the Original Author and Voxelware a perpetual, worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, incorporate, sublicense, and distribute your contribution as part of the Software.

This includes Community Edition, Premium Edition, Enterprise Edition, and other editions or products maintained by Voxelware or the Original Author.

You represent that you have the necessary rights to submit the contribution under these terms.

Submitting a contribution does not grant permission to redistribute the Software outside the terms of this License.`,
  },
  {
    id: "third-party",
    title: "11. Third-Party Components",
    icon: BookOpen,
    content: `Third-party libraries, dependencies, assets, and other components remain subject to their respective licenses.

This License does not remove or restrict rights granted by applicable third-party licenses that cannot legally be restricted by this License.

Where third-party code is incorporated into a Derivative Work, all applicable third-party license requirements must continue to be respected.`,
  },
  {
    id: "ownership",
    title: "12. Ownership",
    icon: Copyright,
    content: `The Software is licensed, not sold.

No ownership or intellectual-property rights are transferred under this License.

Copyright and other intellectual-property rights in the Software remain with the Original Author, Voxelware, or their respective owners.`,
  },
  {
    id: "trademarks",
    title: "13. Trademarks",
    icon: Shield,
    content: `This License does not grant trademark rights.

"Voxelware Studios", Voxelware project names, logos, "CoreTuff", and other trademarks remain the property of their respective owners.

Use of such trademarks for truthful attribution is permitted where required by this License.

Use that implies endorsement, sponsorship, official status, or affiliation requires prior written permission from the applicable trademark owner.`,
  },
  {
    id: "termination",
    title: "14. Termination",
    icon: Gavel,
    content: `This License automatically terminates upon a material violation of its terms.

Upon termination, all rights granted under this License cease, and the violating party must stop using and Redistributing the Software and applicable Derivative Works, except where otherwise required by law.

Voxelware and/or the Original Author may restore rights at their discretion after the violation has been corrected.`,
  },
  {
    id: "disclaimer",
    title: "15. Disclaimer of Warranty",
    icon: AlertTriangle,
    content: `THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.

IN NO EVENT SHALL VOXELWARE STUDIOS, THE ORIGINAL AUTHOR, OR ANY COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY ARISING FROM OR RELATED TO THE SOFTWARE OR ITS USE, EXCEPT WHERE SUCH LIABILITY CANNOT LEGALLY BE EXCLUDED.`,
  },
  {
    id: "reservation-rights",
    title: "16. Reservation of Rights",
    icon: Lock,
    content: `Any rights not expressly granted by this License are reserved by the Original Author and Voxelware.

Permission for activities not expressly permitted by this License must be obtained in writing from the applicable rights holder.`,
  },
]

const vclFullText = `VOXELWARE COMMUNITY LICENSE (VCL)
Version 1.0
Last updated 06 September 2026

Copyright © 2026 Voxelware Studios and the Original Author.
All rights reserved.


=====================================================================
TERMS AND CONDITIONS FOR USE, COPYING, MODIFICATION, AND DISTRIBUTION
=====================================================================


1. DEFINITIONS


"Software" means the Voxelware Studios Community Edition ("CE") project
or component distributed under this License.


"Original Author" means the individual or organization identified in the
Software's copyright notice or official project documentation as the
original author or copyright holder of the Software.


"Voxelware" means Voxelware Studios, the publisher and steward of this
License.


"Original Software" means the Software as originally distributed by the
Original Author.


"Derivative Work" means any modified, forked, ported, adapted, extended,
or otherwise derived version of the Software that contains or is based
substantially upon the Software's code.


"Redistribution" means making the Software or a Derivative Work available
to another person or entity, including through downloads, repositories,
mirrors, package managers, compiled builds, or other distribution methods.




2. PERMISSION


Subject to the terms and conditions of this License, the Original Author
and Voxelware grant you a limited, non-exclusive, worldwide license to:


- Use the Software.
- View and study the source code.
- Modify the Software.
- Compile and build the Software.
- Create private forks and Derivative Works.
- Create and distribute Derivative Works in accordance with this License.
- Submit modifications, fixes, documentation, and other contributions
  to the official project.


All rights not expressly granted by this License are reserved by the
Original Author and/or Voxelware, as applicable.




3. CREDITS AND ATTRIBUTION


All copies and Derivative Works must retain:


- The original copyright notices.
- This License.
- Clear attribution to the Original Author.
- Clear attribution to the applicable Voxelware CE project.


A Redistributed Derivative Work must clearly and prominently state that
it is derived from the Original Software.


The attribution must be reasonably visible to normal users and must not
be intentionally hidden, removed, or altered in a manner intended to
conceal the origin of the Software.


At minimum, a Derivative Work should include a statement substantially
similar to:


"This project is a derivative work of [PROJECT NAME] by [ORIGINAL AUTHOR]
and is licensed under the Voxelware Community License."




4. FORKING AND REBRANDING


Forking, modifying, and rebranding the Software is permitted provided
that all requirements of this License are followed.


A Derivative Work may use its own project name, branding, and identity,
provided that it clearly informs users that it is a Derivative Work of
the Original Software.


A Derivative Work must not:


- Present itself as the Original Software.
- Claim to be an official release of the Original Author or Voxelware.
- Imply endorsement, sponsorship, or affiliation with the Original Author
  or Voxelware without permission.
- Remove required attribution.
- Intentionally conceal its origin from users.


The names, logos, trademarks, and branding belonging to Voxelware,
the Original Author, or the Software may be used for truthful attribution
where permitted, but may not be used in advertising or marketing in a
manner that implies official endorsement.


5. PACKAGE AND NAMESPACE


The original package names and namespaces of the Software must not be
renamed, removed, or replaced in a Redistributed Derivative Work.


Changing package names or namespaces does not remove the requirement to
identify the Derivative Work as being based upon the Original Software.


Private modifications may be made for internal purposes, but no such
modification grants permission to misrepresent or conceal the origin of
the Software when it is subsequently Redistributed.




6. REDISTRIBUTION


Redistribution of any Voxelware Community Edition Software or Derivative
Work is permitted only when all requirements of this License are followed.


Any person or organization Redistributing a CE Software or Derivative Work
must make the complete corresponding source code publicly available in a
Git repository that is accessible to users of the Redistributed Software.


The public repository must contain sufficient source code to reproduce the
Redistributed Software, including applicable modifications made to the
Voxelware CE Software.


Any Redistributed copy or Derivative Work must:


- Include this License.
- Preserve all required copyright notices.
- Provide clear attribution to the Original Author.
- Identify the applicable Voxelware CE project.
- Clearly identify itself as a Derivative Work where applicable.
- Provide a public Git repository containing the corresponding source code.
- Comply with all other requirements of this License.


Redistribution without publicly available corresponding source code is
prohibited.


The source repository must not intentionally omit modifications or other
covered source code in order to conceal the origin or functionality of the
Redistributed Software.


7. SAME-LICENSE REQUIREMENT


Any Derivative Work containing or substantially based upon code covered
by this License and distributed to another person or entity must itself
be distributed under the Voxelware Community License (VCL).


The distributor must provide recipients with the rights and restrictions
of this License.


A Derivative Work may not be distributed under another license, including
MIT, Apache, GNU GPL, BSD, or a proprietary/custom license, where doing
so would remove, conflict with, or bypass the requirements of this
License.


Third-party components that are not covered by this License remain
subject to their respective licenses.




8. COMMERCIAL USE AND MONETIZATION


Private or internal commercial use of the Software is permitted.


However, the Software and any Derivative Work may not be sold, rented,
leased, sublicensed, monetized, or otherwise commercially exploited
without prior written permission from the Original Author and/or
Voxelware, as applicable.


In particular, a fork or Derivative Work may not:


- Be sold as a paid download.
- Be offered through a paid subscription.
- Be placed behind a paywall.
- Be monetized through advertisements, donations, sponsorships, or
  similar mechanisms where the fork or Derivative Work itself is the
  subject of the monetized offering.
- Be bundled into a paid software product for the purpose of commercially
  exploiting the Derivative Work.
- Be commercially licensed or sublicensed.


Voxelware and the Original Author retain the right to commercially
distribute, license, monetize, or offer premium versions of their
respective Software.


9. REPUTATION, IMPERSONATION, MALICIOUS USE, AND ENFORCEMENT


The Software and Derivative Works may not intentionally be used to:


- Impersonate Voxelware, the Original Author, or an official project.
- Deceive users regarding the origin or authorship of the Software.
- Distribute malicious functionality while falsely attributing it to
  Voxelware or the Original Author.
- Intentionally conceal substantial copying of the Software.
- Intentionally misrepresent a Derivative Work as the Original Software.
- Intentionally damage the integrity of the Software or falsely associate
  harmful activity with the Original Author or Voxelware.


Voxelware Studios reserves the right to request the removal or cessation
of any Fork, Redistribution, or Derivative Work where Voxelware reasonably
determines that its continued distribution:


- Violates this License;
- Creates a significant risk of harm to users or the Software;
- Misrepresents Voxelware, the Original Author, or the Software;
- Infringes or threatens Voxelware's intellectual-property rights;
- Circumvents the commercial or licensing restrictions of this License;
- Materially interferes with Voxelware's legitimate commercial offerings
  or monetization of the Software; or
- Otherwise creates a substantial and legitimate concern regarding the
  protection, integrity, security, or sustainability of the Voxelware
  CE ecosystem.


Where appropriate and legally available, Voxelware may request hosting
providers, repository providers, distributors, or other relevant parties
to remove or disable access to the violating material.


Voxelware Studios reserves the right to take appropriate legal action and
pursue any remedies available under applicable law.


Nothing in this section grants Voxelware the right to remove a Derivative
Work solely because Voxelware disagrees with criticism, opinions, reviews,
or lawful commentary concerning the Software.


10. UPSTREAM INTEGRATION AND CONTRIBUTIONS


By submitting code, documentation, fixes, or other contributions to an
official Voxelware CE project, you grant the Original Author and
Voxelware a perpetual, worldwide, non-exclusive, royalty-free license
to use, reproduce, modify, adapt, incorporate, sublicense, and distribute
your contribution as part of the Software.


This includes Community Edition, Premium Edition, Enterprise Edition,
and other editions or products maintained by Voxelware or the Original
Author.


You represent that you have the necessary rights to submit the
contribution under these terms.


Submitting a contribution does not grant permission to redistribute the
Software outside the terms of this License.




11. THIRD-PARTY COMPONENTS


Third-party libraries, dependencies, assets, and other components remain
subject to their respective licenses.


This License does not remove or restrict rights granted by applicable
third-party licenses that cannot legally be restricted by this License.


Where third-party code is incorporated into a Derivative Work, all
applicable third-party license requirements must continue to be respected.




12. OWNERSHIP


The Software is licensed, not sold.


No ownership or intellectual-property rights are transferred under this
License.


Copyright and other intellectual-property rights in the Software remain
with the Original Author, Voxelware, or their respective owners.




13. TRADEMARKS


This License does not grant trademark rights.


"Voxelware Studios", Voxelware project names, logos, "CoreTuff", and
other trademarks remain the property of their respective owners.


Use of such trademarks for truthful attribution is permitted where
required by this License.


Use that implies endorsement, sponsorship, official status, or
affiliation requires prior written permission from the applicable
trademark owner.


14. TERMINATION


This License automatically terminates upon a material violation of its
terms.


Upon termination, all rights granted under this License cease, and the
violating party must stop using and Redistributing the Software and
applicable Derivative Works, except where otherwise required by law.


Voxelware and/or the Original Author may restore rights at their
discretion after the violation has been corrected.


15. DISCLAIMER OF WARRANTY


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
NONINFRINGEMENT, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.


IN NO EVENT SHALL VOXELWARE STUDIOS, THE ORIGINAL AUTHOR, OR ANY
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY
ARISING FROM OR RELATED TO THE SOFTWARE OR ITS USE, EXCEPT WHERE SUCH
LIABILITY CANNOT LEGALLY BE EXCLUDED.




16. RESERVATION OF RIGHTS


Any rights not expressly granted by this License are reserved by the
Original Author and Voxelware.


Permission for activities not expressly permitted by this License must
be obtained in writing from the applicable rights holder.


=====================================================================


VOXELWARE COMMUNITY LICENSE (VCL) 1.0


Source Available
Modification Permitted
Forks and Derivative Works Permitted
Redistribution Permitted Under VCL
Attribution Required
Commercial Monetization of Derivatives Requires Permission


Copyright © 2026 Voxelware Studios and the Original Author.
All rights reserved.`

export default function LicensingPage() {
  const [activeLicense, setActiveLicense] = useState<LicenseType>("proprietary")
  const [search, setSearch] = useState("")
  const [activeSection, setActiveSection] = useState("grant-of-license")
  const [vclExpanded, setVclExpanded] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopyLicense = async () => {
    try {
      await navigator.clipboard.writeText(vclFullText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const textarea = document.createElement("textarea")
      textarea.value = vclFullText
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleDownloadLicense = () => {
    const blob = new Blob([vclFullText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Voxelware-Community-License-VCL-1.0.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <PageTransition>
      <section className="relative min-h-screen pt-24 pb-16">
        <MeshGradient />
        <div className="container-wide px-4">
          <ScrollReveal className="text-center mb-8">
            <Badge variant="gradient" className="mb-4">
              Legal
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Licensing
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Copyright &copy; Voxelware Studios. All rights reserved.
            </p>
          </ScrollReveal>

          <ScrollReveal className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-1 p-1 glass-strong rounded-xl">
              <button
                onClick={() => {
                  setActiveLicense("proprietary")
                  setSearch("")
                  setActiveSection("grant-of-license")
                }}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeLicense === "proprietary"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted hover:text-white hover:bg-white/5"
                }`}
              >
                Proprietary License
              </button>
              <button
                onClick={() => {
                  setActiveLicense("community")
                  setSearch("")
                  setActiveSection("definitions")
                  setVclExpanded(false)
                }}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeLicense === "community"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted hover:text-white hover:bg-white/5"
                }`}
              >
                Community License
              </button>
            </div>
          </ScrollReveal>

          {activeLicense === "proprietary" ? (
            <>
              <ScrollReveal className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">
                  Voxelware Proprietary License v1.1
                </h2>
                <p className="text-sm text-muted">
                  Last Updated: 13 June 2026
                </p>
              </ScrollReveal>

              <div className="relative max-w-sm mx-auto mb-12">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                <Input
                  placeholder="Search license..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="grid lg:grid-cols-4 gap-8">
                <ScrollReveal direction="left" className="lg:col-span-1">
                  <nav className="sticky top-24 glass-strong rounded-xl p-4 max-h-[70vh] overflow-y-auto">
                    <h3 className="text-sm font-semibold mb-3 px-3">Sections</h3>
                    <div className="space-y-1">
                      {proprietarySections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => {
                            setActiveSection(section.id)
                            document
                              .getElementById(section.id)
                              ?.scrollIntoView({ behavior: "smooth" })
                          }}
                          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-left transition-all ${
                            activeSection === section.id
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <section.icon className="w-3.5 h-3.5 shrink-0" />
                          {section.title}
                        </button>
                      ))}
                    </div>
                  </nav>
                </ScrollReveal>

                <div className="lg:col-span-3 space-y-8">
                  {proprietarySections.map((section, i) => (
                    <motion.div
                      key={section.id}
                      id={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      viewport={{ once: true }}
                      className="glass rounded-xl p-8 scroll-mt-24"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <section.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-xl font-bold">{section.title}</h2>
                      </div>
                      <div className="text-muted leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    </motion.div>
                  ))}

                  <motion.div className="glass rounded-xl p-8 border-primary/20 bg-primary/5">
                    <p className="text-center text-sm text-muted italic">
                      By downloading, purchasing, installing, or using the Software, you acknowledge that you have read, understood, and agree to be bound by this License.
                    </p>
                  </motion.div>
                </div>
              </div>
            </>
          ) : (
            <>
              <ScrollReveal className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">
                  Voxelware Community License v1.0
                </h2>
                <p className="text-sm text-muted">
                  Last Updated: 06 September 2026
                </p>
              </ScrollReveal>

              <ScrollReveal className="mb-8">
                <div className="glass rounded-xl p-8">
                  <div className="flex items-center justify-end gap-2 mb-6">
                    <button
                      onClick={handleCopyLicense}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium glass-strong hover:bg-white/10 transition-all"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      {copied ? "Copied!" : "Copy License"}
                    </button>
                    <button
                      onClick={handleDownloadLicense}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium glass-strong hover:bg-white/10 transition-all"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>

                  <p className="text-muted leading-relaxed mb-6">
                    The Voxelware Community License (VCL) is the source-available community license used by Voxelware Studios Community Edition projects.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {[
                      "Source available",
                      "Modification permitted",
                      "Forks and derivative works permitted",
                      "Redistribution permitted under VCL",
                      "Attribution required",
                      "Public source repository required",
                      "Derivative-work disclosure required",
                      "Commercial monetization of derivatives requires permission",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-400 shrink-0" />
                        <span className="text-muted">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-start gap-2 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <AlertTriangle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-yellow-200/80">
                      VCL is a proprietary source-available license and is not an OSI-approved open-source license.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <div className="flex justify-center mb-8">
                <button
                  onClick={() => setVclExpanded(!vclExpanded)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-all"
                >
                  {vclExpanded ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      Hide Full License
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      View Full License
                    </>
                  )}
                </button>
              </div>

              {vclExpanded && (
                <div className="grid lg:grid-cols-4 gap-8">
                  <ScrollReveal direction="left" className="lg:col-span-1">
                    <nav className="sticky top-24 glass-strong rounded-xl p-4 max-h-[70vh] overflow-y-auto">
                      <h3 className="text-sm font-semibold mb-3 px-3">Sections</h3>
                      <div className="space-y-1">
                        {communitySections.map((section) => (
                          <button
                            key={section.id}
                            onClick={() => {
                              setActiveSection(section.id)
                              document
                                .getElementById(section.id)
                                ?.scrollIntoView({ behavior: "smooth" })
                            }}
                            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-left transition-all ${
                              activeSection === section.id
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-muted hover:text-white hover:bg-white/5"
                            }`}
                          >
                            <section.icon className="w-3.5 h-3.5 shrink-0" />
                            {section.title}
                          </button>
                        ))}
                      </div>
                    </nav>
                  </ScrollReveal>

                  <div className="lg:col-span-3 space-y-8">
                    {communitySections.map((section, i) => (
                      <motion.div
                        key={section.id}
                        id={section.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.03 }}
                        viewport={{ once: true }}
                        className="glass rounded-xl p-8 scroll-mt-24"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <section.icon className="w-5 h-5 text-primary" />
                          </div>
                          <h2 className="text-xl font-bold">{section.title}</h2>
                        </div>
                        <div className="text-muted leading-relaxed whitespace-pre-line">
                          {section.content}
                        </div>
                      </motion.div>
                    ))}

                    <motion.div className="glass rounded-xl p-8 border-primary/20 bg-primary/5">
                      <p className="text-center text-sm text-muted italic">
                        By using, modifying, or redistributing the Software, you acknowledge that you have read, understood, and agree to be bound by the Voxelware Community License.
                      </p>
                    </motion.div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
