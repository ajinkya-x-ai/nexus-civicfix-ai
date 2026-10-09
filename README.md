# NEXUS CIVICFIX AI
### Evidence-to-Action Civic Intelligence Agent
**"Identify. Investigate. Act. Improve."**

NEXUS CIVICFIX AI is an operational full-stack civic intelligence platform that transforms unstructured citizen reports into structured, evidence-backed, actionable cases. It orchestrates real application tools, executes spatial duplicate clustering, applies deterministic risk prioritization, matches jurisdictional civic authorities, and compiles exportable formal complaint dossiers with immutable audit trails.

---

## 🚀 Key Highlights & Architectural Credibility

1. **Not a Mockup, Not a Chatbot**: A real operational software console with 9 functional screens, persistent storage, and server-side tool orchestration.
2. **Transparent Tool Orchestrator**: Executes a real sequential 9-stage pipeline with measurable latencies, live diagnostic payloads, and pause-and-resume capability when location clarification is required.
3. **Multi-Signal Duplicate Clustering**: Transparent Jaccard lexical token overlap combined with Haversine GPS distance. Requires human officer verification without premature auto-merging.
4. **Explainable Deterministic Prioritization**: Risk scores (`Routine`, `Standard`, `Elevated`, `Urgent Review`) are derived from documented rules and hazard signals, not opaque black-box numbers. Supports reviewer manual overrides with recorded administrative rationale.
5. **Configured Civic Resource Registry**: Automatically routes incidents to verified local municipal authorities (BBMP Road Division, BBMP Solid Waste Cell, BWSSB Water Supply, BESCOM Power, KSDMA). Never fabricates unverified phone numbers or URLs.
6. **Honest Model Fallback Engine**: Truthfully discloses whether an AI model API key is present. If unconfigured or unavailable, operates in a labeled deterministic offline mode without fabricating AI responses.
7. **Modular Storage Architecture**: Implements persistent JSON file storage for local development (`data/incidents.json`, `data/audit.json`) that survives server reboots, with a drop-in Firestore adapter ready for cloud deployment.
8. **Automated 10-Point Test Suite (A - J)**: Built-in verification test suite validating all hackathon acceptance criteria.

---

## 🖥️ The 9 Functional Screens

| # | Screen | Description |
|---|---|---|
| **1** | **Civic Intelligence Overview** | Live command-center dashboard with metrics calculated dynamically from real repository records, Priority Queue, Duplicate Watch, Category Distribution, and real-time execution logs. |
| **2** | **Report a Civic Issue** | Clean intake form with natural-language text, category selection, location input, GPS helper, photographic evidence upload, and quick preset loaders for judges. |
| **3** | **AI Investigation Workspace** | Core hackathon demo screen displaying the 9 sequential workflow stages, live execution states, diagnostic inputs/outputs, missing location clarification prompts, and generated complaint dossiers. |
| **4** | **Incident Explorer** | Search, filter, and sort cases. Displays side-by-side original citizen statements vs AI-normalized summaries, coordinates, rule triggers, and reviewer priority override controls. |
| **5** | **Duplicate Incident Watch** | Side-by-side cluster comparison with similarity scores, location analysis, and reviewer verification buttons (`Confirmed Duplicate`, `Not a Duplicate`, `Needs Further Review`). |
| **6** | **Civic Resource Directory** | Configured jurisdictional registry for Bengaluru & Karnataka civic agencies with verification badges, emergency phone numbers, and official portal links. |
| **7** | **Case Management** | Pipeline view of internal workflow states (`New` → `Under Review` → `Prepared` → `Resolved`), complaint dossier editing, formatted `.txt` / `.json` exports, and external submission verification checkpoint. |
| **8** | **Agent Activity & Audit Trail** | Immutable log of actual server tool executions with execution status, durations in ms, and sanitized inputs/outputs (with sensitive credentials redacted). |
| **9** | **Settings & Model Configuration** | Google AI Studio model selector (`gemini-2.0-flash`, `gemma-2-9b-it`, `gemma-2-27b-it`), runtime API key management, live connection test, demo dataset reset, and automated 10-point test runner. |

---

## 🛠️ The 9 Real Application Tools

* `TOOL 1: validateIncident()` — Validates schema completeness, normalizes categories, and detects missing mandatory fields.
* `TOOL 2: searchSimilarIncidents()` — Computes transparent lexical token Jaccard similarity and Haversine coordinate proximity across existing stored cases.
* `TOOL 3: lookupCivicResources()` — Queries configured jurisdictional directory matching category and municipal zones.
* `TOOL 4: calculateSuggestedPriority()` — Applies deterministic, explainable civic rules (`Routine`, `Standard`, `Elevated`, `Urgent Review`).
* `TOOL 5: generateActionPlan()` — Formulates operational response steps and dispatch review windows.
* `TOOL 6: prepareComplaintPackage()` — Compiles a formal complaint dossier with readiness state (`Draft` or `Prepared for Review`).
* `TOOL 7: saveIncident()` — Persists cases to disk with unique collision-safe IDs (`CIV-2026-XXXX`) and idempotency checks to prevent duplicate submissions.
* `TOOL 8: recordAuditEvent()` — Writes sanitized execution event records to the persistent audit log.
* `TOOL 9: updateIncidentStatus()` — Validates state transitions (`New` → `Under Review` → `Prepared` → `Resolved`).

---

## ⚖️ Deterministic Risk Prioritization Rules

* **Urgent Review**: Triggered by immediate acute hazards:
  * `RULE_IMMEDIATE_HAZARD`: Pressurized water main burst, live exposed electrical wire, road sinkhole / collapse, or gas leak.
* **Elevated**: Triggered by high vulnerability or transit corridors:
  * `RULE_ROAD_HAZARD_TWO_WHEELER`: Pothole with standing water or road crater affecting two-wheeler commuter stability.
  * `RULE_HIGH_FOOTFALL_ZONE`: Defects in proximity to hospitals, schools, or university campuses.
* **Standard**: Baseline municipal service request:
  * `RULE_BASELINE_STANDARD`: Regular solid waste overflow or routine maintenance without acute life-safety modifiers.
* **Routine**: Minor non-hazardous civic items:
  * `RULE_STREETLIGHT_OUTAGE`: Non-functional lighting without exposed live electrical wiring.

---

## 📦 Getting Started & Setup

### Prerequisites
- Node.js (v18+ recommended)
- `pnpm` (or `npm`)

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/ajinkya/nexus-civicfix-ai.git
cd "Hack RIT"
pnpm install
```

### Running the Full Application

#### Development Mode (Concurrent Server & Client)
```bash
pnpm dev
```
- Backend API runs on: `http://localhost:3001`
- Frontend UI runs on: `http://localhost:5173` (with `/api` proxy configured)

#### Production Mode (Unified Single-Port Server)
```bash
pnpm build
pnpm start
```
- Serves both API and optimized React frontend on `http://localhost:3001`.

---

## 🔑 Configuring Gemma / Google AI Studio

1. **Via Environment Variable**:
   Create a `.env` file in the project root:
   ```env
   GEMINI_API_KEY=your_google_ai_studio_api_key_here
   GEMMA_MODEL=gemini-2.0-flash
   PORT=3001
   ```
2. **Via In-App Settings Screen**:
   Navigate to the **Settings & Model** screen in the left navigation.
   - Enter your Google AI Studio API Key.
   - Select your desired model identifier (`gemini-2.0-flash`, `gemma-2-9b-it`, `gemma-2-27b-it`).
   - Click **"Test Model Connection"** to verify live connectivity with Google servers.

*Note: If no key is configured, the application functions in **Deterministic Offline Mode**, clearly disclosed to judges and users without fabricating AI claims.*

---

## 🧪 Automated Verification Test Suite (Tests A - J)

The application includes automated verification tests covering all 10 hackathon test scenarios:
- **TEST A**: Complete Complaint End-to-End Workflow
- **TEST B**: Missing Location Safeguard & Clarification
- **TEST C**: Algorithmic Duplicate Detection & Explanation
- **TEST D**: Resource Lookup Failure & Anti-Fabrication Safeguard
- **TEST E**: Invalid AI Response Bounded Recovery & Honest Fallback
- **TEST F**: Storage Layer Modular Identification & Collision-Safe IDs
- **TEST G**: Persistent Storage Verification Across Sessions
- **TEST H**: Duplicate Demo Execution Idempotency
- **TEST I**: Complaint Package Completeness & Export Readiness
- **TEST J**: Model Unavailable Truthful Disclosure

### Run Tests via CLI:
```bash
pnpm test
```

### Run Tests via Web Console:
Navigate to **Settings & Model** → Click **"Run 10-Point Verification Suite"**.

---

## 🎯 Demonstration Guide for Hackathon Judges

1. **One-Click Interactive Demo**: Click the **"Run Demo Investigation"** button on the top header. Watch the real 9-stage investigation pipeline execute live with real timings and audit logs.
2. **Missing Location Handling (Test B)**: Go to **Report Incident** → Type an incident description without specifying a location → Click Submit. Observe the agent pause at Stage 3 with an interactive clarification banner. Type a location and click **"Provide Location & Resume"** to watch Stages 4 through 9 resume.
3. **Duplicate Detection (Test C)**: Go to **Duplicate Watch**. Inspect the cluster pair between Incident A and Incident B near RV College on Mysuru Road. Review the 84% similarity score and verify the candidate decision controls.
4. **Explainable Priority Rules**: Open **Incident Explorer** → Inspect Incident CIV-2026-0004 (Water Pipe Burst) and see why it received an **Urgent Review** classification via `RULE_IMMEDIATE_HAZARD`.
5. **Dossier Export**: Open **Case Management** → Click **"Export Formatted Report (.txt)"** or **"Export JSON"** to download the structured case dossier.
