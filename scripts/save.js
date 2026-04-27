saved.firstTimePlaying = true //esta flag se tiene que quitar cuando seleccione el pkmn, es lo que hace que no puedas guardar


function saveGame() {
  if (saved.firstTimePlaying == true) return //scary!
  let data = {};

  // Variable suelta
  data.saved = saved;
  data.team = team;

  // Items
  for (const i in item) {
    data[i] = {};
    data[i].got = item[i].got;
    data[i].newItem = item[i].newItem;
  }


  // Shop
  for (const i in shop) {
    data[i] = {};
    data[i].stock = shop[i].stock;
  }

  // Areas
  for (const i in areas) {
    data[i] = {};
    data[i].defeated = areas[i].defeated;
    data[i].hpPercentage = areas[i].hpPercentage;
    if (areas[i].type=="event" && areas[i].encounter) data[i].ticketIndex = areas[i].ticketIndex;

    if (areas[i].type=="frontier") data[i].level = areas[i].level;
    if (areas[i].type=="frontier") data[i].team = areas[i].team;
    if (areas[i].type=="frontier") data[i].difficulty = areas[i].difficulty;
    if (areas[i].type=="frontier") data[i].tier = areas[i].tier;
    if (areas[i].type=="frontier") data[i].reward = areas[i].reward;
    if (areas[i].type=="frontier") data[i].itemReward = areas[i].itemReward;
    if (areas[i].type=="frontier") data[i].background = areas[i].background;
    if (areas[i].type=="frontier") data[i].fieldEffect = areas[i].fieldEffect;
    if (areas[i].id=="training") data[i].tier = areas[i].tier;
    if (areas[i].id=="training") data[i].currentTraining = areas[i].currentTraining;
    if (areas[i].id=="wildlifePark") data[i].spawns = areas[i].spawns;
    if (areas[i].id=="wildlifePark") data[i].icon = areas[i].icon;
    if (areas[i].id==areas.frontierBattleFactory.id) data[i].icon = areas[i].icon;
    if (areas[i].type=="dimension") data[i].spawns = areas[i].spawns;

  }

  // Pokémon
  for (const i in pkmn) {
    if (!data[i]) data[i] = {};
    data[i].caught = pkmn[i].caught;
    data[i].movepool = pkmn[i].movepool;
    data[i].level = pkmn[i].level;
    data[i].moves = pkmn[i].moves;
    data[i].newmoves = pkmn[i].newmoves;
    data[i].ivs = pkmn[i].ivs;
    data[i].exp = pkmn[i].exp;
    data[i].newEvolution = pkmn[i].newEvolution;
    data[i].ability = pkmn[i].ability;
    data[i].shiny = pkmn[i].shiny;
    data[i].shinyDisabled = pkmn[i].shinyDisabled;
    data[i].hiddenAbilityUnlocked = pkmn[i].hiddenAbilityUnlocked;
    data[i].tag = pkmn[i].tag;
    data[i].ribbons = pkmn[i].ribbons;
    data[i].pokerus = pkmn[i].pokerus;
    data[i].recordSpiraling = pkmn[i].recordSpiraling;
    data[i].movepoolMemory = pkmn[i].movepoolMemory;
    data[i].nuzlocked = pkmn[i].nuzlocked;
    data[i].nickname = pkmn[i].nickname;
    data[i].decor = pkmn[i].decor;
    data[i].decorOwned = pkmn[i].decorOwned;
    data[i].starsign = pkmn[i].starsign;
    data[i].starsignList = pkmn[i].starsignList;
    data[i].nature = pkmn[i].nature;
    data[i].tagList = pkmn[i].tagList;

  }

  localStorage.setItem("gameData", JSON.stringify(data));
  localStorage.setItem("gameDataUpdatedAt", new Date().toISOString());
}

// ---- CARGAR ----
function loadGame() {
  const raw = localStorage.getItem("gameData");
  if (!raw) {
    return;
  } 

  const data = JSON.parse(raw);

  if (data.saved !== undefined) saved = data.saved;
  if (data.team !== undefined) team = data.team;

  for (const i in item) {
    if (data[i]) {
      item[i].got = data[i].got;
      item[i].newItem = data[i].newItem;
    }
  }


  for (const i in shop) {
    if (data[i]) {
      shop[i].stock = data[i].stock;
    }
  }

  for (const i in areas) {
    if (data[i]) {
    areas[i].defeated = data[i].defeated;
    if (areas[i].type=="event" && areas[i].encounter) areas[i].ticketIndex = data[i].ticketIndex;
    if (data[i].hpPercentage!==undefined) areas[i].hpPercentage = data[i].hpPercentage;

    if (areas[i].type=="frontier") areas[i].level = data[i].level;
    if (areas[i].type=="frontier") areas[i].team = data[i].team;
    if (areas[i].type=="frontier") areas[i].difficulty = data[i].difficulty;
    if (areas[i].type=="frontier") areas[i].tier = data[i].tier;
    if (areas[i].type=="frontier") areas[i].reward = data[i].reward;
    if (areas[i].type=="frontier") areas[i].itemReward = data[i].itemReward;
    if (areas[i].type=="frontier") areas[i].background = data[i].background;
    if (areas[i].type=="frontier") areas[i].fieldEffect = data[i].fieldEffect;
    if (areas[i].id=="training") areas[i].tier = data[i].tier;
    if (areas[i].id=="training") areas[i].currentTraining = data[i].currentTraining;
    if (areas[i].id=="wildlifePark") areas[i].spawns = data[i].spawns;
    if (areas[i].id=="wildlifePark") areas[i].icon = data[i].icon;
    if (areas[i].id==areas.frontierBattleFactory.id) areas[i].icon = data[i].icon;
    if (areas[i].type=="dimension") areas[i].spawns = data[i].spawns;

  }
  }

  for (const i in pkmn) {
    if (data[i]) {
      pkmn[i].caught = data[i].caught;
      pkmn[i].movepool = data[i].movepool;
      pkmn[i].level = data[i].level;
      pkmn[i].moves = data[i].moves;
      pkmn[i].newmoves = data[i].newmoves;
      pkmn[i].ivs = data[i].ivs;
      pkmn[i].exp = data[i].exp;
      pkmn[i].newEvolution = data[i].newEvolution;
      pkmn[i].ability = data[i].ability;
      pkmn[i].shiny = data[i].shiny;
      pkmn[i].shinyDisabled = data[i].shinyDisabled;
      pkmn[i].hiddenAbilityUnlocked = data[i].hiddenAbilityUnlocked;
      pkmn[i].tag = data[i].tag;
      pkmn[i].ribbons = data[i].ribbons;
      pkmn[i].pokerus = data[i].pokerus;
      pkmn[i].recordSpiraling = data[i].recordSpiraling;
      pkmn[i].movepoolMemory = data[i].movepoolMemory;
      pkmn[i].nuzlocked = data[i].nuzlocked;
      pkmn[i].nickname = data[i].nickname;
      pkmn[i].decor = data[i].decor;
      pkmn[i].decorOwned = data[i].decorOwned;
      pkmn[i].starsign = data[i].starsign;
      pkmn[i].starsignList = data[i].starsignList;
      pkmn[i].nature = data[i].nature;
      pkmn[i].tagList = data[i].tagList;
    }
  }

}


function exportData() {
  const raw = localStorage.getItem("gameData");
  if (!raw) return;

  const blob = new Blob([raw], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `Pokechill-${new Date().toISOString().split("T")[0]}.json`;
  a.click();

  URL.revokeObjectURL(url);
}

function importData() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";

  input.onchange = () => {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        localStorage.setItem("gameData", JSON.stringify(data));

        loadGame();

        window.location.reload();
      } catch (err) {
        alert("Error loading data.");
      }
    };

    reader.readAsText(file);
  };

  input.click();
}







function exportToText() {
  const raw = localStorage.getItem("gameData");
  if (!raw) {
    console.log("No save data found");
    return null;
  }
  
  return raw;
}

function loadFromText() {
  const input = document.getElementById("text-data-raw");
  if (!input) {
    alert("Element with id 'text-data-raw' not found");
    return;
  }

  const jsonData = input.value.trim();
  if (!jsonData) {
    alert("No data found in the input");
    return;
  }

  try {
    const data = JSON.parse(jsonData);
    localStorage.setItem("gameData", JSON.stringify(data));
    loadGame();
    window.location.reload();
  } catch (err) {
    alert("Error loading data: " + err.message);
  }
}

// paste from clipboard using the API
async function pasteFromClipboard() {
  const input = document.getElementById("text-data-raw");
  if (!input) {
    alert("Element with id 'text-data-raw' not found");
    return;
  }

  try {
    const text = await navigator.clipboard.readText();
    input.value = text;
    alert("Data pasted successfully!");
  } catch (err) {
    alert("Could not paste from clipboard. Please paste manually or grant clipboard permissions.");
  }
}

function textData() {
  saveGame();
  document.getElementById("tooltipTop").style.display = `none`;
  document.getElementById("tooltipTitle").style.display = `none`;

  const savedData = exportToText();

  if (savedData) {
    document.getElementById("tooltipMid").innerHTML = `
      This is your savefile code<br>You can copy or paste savefile codes here to export or import saves<br>
      <textarea id="text-data-raw" rows="10" style="width:95%; resize:vertical; font-family:monospace; font-size:0.9rem;"></textarea>
    `;
    
    document.getElementById("text-data-raw").value = savedData;

    document.getElementById("tooltipBottom").innerHTML = `
      <div style="display:flex;width:100%; align-items:center;justify-content:center; flex-wrap:wrap;">
        <div onClick='navigator.clipboard.writeText(document.getElementById("text-data-raw").value); alert("Data copied to the Clipboard!");' 
             style="cursor:pointer; font-size:2rem; width:33%; padding:10px;" id="prevent-tooltip-exit">
          Copy
        </div>
        <div onClick='pasteFromClipboard()' 
             style="cursor:pointer; font-size:2rem; width:33%; padding:10px;" id="prevent-tooltip-exit">
          Paste
        </div>
        <div onClick='loadFromText()' 
             style="cursor:pointer; font-size:2rem; width:33%; padding:10px;" id="prevent-tooltip-exit">
          Load
        </div>
      </div>
    `;
  } else {
    document.getElementById("tooltipMid").innerHTML = `
      You can copy or paste savefile codes here to export or import saves<br>
      <textarea id="text-data-raw" rows="10" style="width:95%; resize:vertical; font-family:monospace; font-size:0.9rem;"></textarea>
    `;

    document.getElementById("tooltipBottom").innerHTML = `
      <div style="display:flex;width:100%; align-items:center;justify-content:center;">
        <div onClick='pasteFromClipboard()' 
             style="cursor:pointer; font-size:2rem; width:50%; padding:10px;" id="prevent-tooltip-exit">
          Paste
        </div>
        <div onClick='loadFromText()' 
             style="cursor:pointer; font-size:2rem; width:50%; padding:10px;" id="prevent-tooltip-exit">
          Load
        </div>
      </div>
    `;
  }

  openTooltip();
}





setInterval(saveGame, 1 * 60 * 1000); 

document.addEventListener("keydown", (ev) => {
  if (ev.key.toLowerCase() === "s") {
    saveGame();
  }
});

function clearData() {
  localStorage.clear();
  window.location.reload();
}

// ------------------------------
// Cloud save (Google Drive appDataFolder)
// ------------------------------

// drive.appdata = store save in the user's hidden app data space (no access to full Drive)
// openid/email = lets us display "signed in as user@gmail.com" in Settings
const DRIVE_SCOPE = "https://www.googleapis.com/auth/drive.appdata openid email";
const DRIVE_SAVE_FILENAME = "pokechill-save.json";

// Create a Google Cloud OAuth Client ID (Web application), then replace this value.
// Authorized JavaScript origins should include: https://kevinpautonnier.github.io
const GOOGLE_OAUTH_CLIENT_ID = "126057060733-k07jkqvsnvc18gifbhjurrvaqjj2hr2o.apps.googleusercontent.com";

let driveTokenClient = null;
let driveAccessToken = null;
let driveAccessTokenExpiresAtMs = 0;
let driveUserEmail = null;

function drivePersistSession() {
  try {
    if (driveAccessToken) {
      sessionStorage.setItem("driveAccessToken", driveAccessToken);
      sessionStorage.setItem("driveAccessTokenExpiresAtMs", String(driveAccessTokenExpiresAtMs || 0));
    } else {
      sessionStorage.removeItem("driveAccessToken");
      sessionStorage.removeItem("driveAccessTokenExpiresAtMs");
    }

    if (driveUserEmail) {
      sessionStorage.setItem("driveUserEmail", driveUserEmail);
    } else {
      sessionStorage.removeItem("driveUserEmail");
    }
  } catch (_) {}
}

function driveRestoreSessionFromStorage() {
  try {
    const token = sessionStorage.getItem("driveAccessToken");
    const exp = Number(sessionStorage.getItem("driveAccessTokenExpiresAtMs") || "0");
    const email = sessionStorage.getItem("driveUserEmail");

    if (token && exp && exp > Date.now() + 30_000) {
      driveAccessToken = token;
      driveAccessTokenExpiresAtMs = exp;
      if (email) driveUserEmail = email;
      driveSetStatusLabel();
      return true;
    }
  } catch (_) {}

  return false;
}

function driveSetStatusLabel() {
  const el = document.getElementById("drive-cloud-label");
  if (!el) return;

  if (driveUserEmail) {
    el.textContent = `Cloud Save (Google Drive) — ${driveUserEmail}`;
  } else {
    el.textContent = "Cloud Save (Google Drive)";
  }
}

async function driveFetchUserEmail() {
  // Requires scopes: openid + email
  const resp = await driveAuthedFetch("https://openidconnect.googleapis.com/v1/userinfo");
  if (!resp.ok) throw new Error(`userinfo failed (${resp.status})`);
  const data = await resp.json();
  const email = data?.email;
  if (typeof email === "string" && email.includes("@")) {
    driveUserEmail = email;
    driveSetStatusLabel();
    drivePersistSession();
  }
}

function driveIsConfigured() {
  return GOOGLE_OAUTH_CLIENT_ID && GOOGLE_OAUTH_CLIENT_ID !== "REPLACE_ME_GOOGLE_CLIENT_ID";
}

function driveEnsureSdkReady({ silent = false } = {}) {
  if (!driveIsConfigured()) {
    if (!silent) alert("Cloud Save is not configured. Set GOOGLE_OAUTH_CLIENT_ID in scripts/save.js.");
    return false;
  }

  if (!window.google?.accounts?.oauth2?.initTokenClient) {
    if (!silent) alert("Google Sign-In SDK not loaded yet. Please retry in a second.");
    return false;
  }

  if (!driveTokenClient) {
    driveTokenClient = google.accounts.oauth2.initTokenClient({
      client_id: GOOGLE_OAUTH_CLIENT_ID,
      scope: DRIVE_SCOPE,
      callback: () => {},
    });
  }

  return true;
}

async function driveEnsureToken({ interactive, silent = false }) {
  if (!driveEnsureSdkReady({ silent })) return null;

  const now = Date.now();
  if (driveAccessToken && driveAccessTokenExpiresAtMs - now > 30_000) {
    return driveAccessToken;
  }

  return await new Promise((resolve, reject) => {
    driveTokenClient.callback = (resp) => {
      if (!resp || resp.error) {
        reject(resp);
        return;
      }

      driveAccessToken = resp.access_token;
      const expiresInSec = Number(resp.expires_in || 0);
      driveAccessTokenExpiresAtMs = Date.now() + Math.max(0, expiresInSec - 5) * 1000;
      drivePersistSession();
      resolve(driveAccessToken);
    };

    // For silent refresh, GIS expects prompt: "" (empty). "none" is not consistently accepted.
    driveTokenClient.requestAccessToken({ prompt: interactive ? "consent" : "" });
  });
}

async function driveAuthedFetch(url, init = {}) {
  const token = await driveEnsureToken({ interactive: false }).catch(async () => {
    return await driveEnsureToken({ interactive: true });
  });

  if (!token) throw new Error("No access token");

  const headers = new Headers(init.headers || {});
  headers.set("Authorization", `Bearer ${token}`);

  return await fetch(url, { ...init, headers });
}

async function driveReadErrorBody(resp) {
  try {
    const text = await resp.text();
    if (!text) return "";
    // Google APIs often return JSON error payloads; try to compact it.
    try {
      const json = JSON.parse(text);
      return JSON.stringify(json);
    } catch (_) {
      return text.slice(0, 800);
    }
  } catch (_) {
    return "";
  }
}

function driveGetLocalUpdatedAt() {
  return localStorage.getItem("gameDataUpdatedAt");
}

async function driveFindSaveFile() {
  const url =
    "https://www.googleapis.com/drive/v3/files" +
    `?spaces=appDataFolder&q=${encodeURIComponent("name='" + DRIVE_SAVE_FILENAME + "' and trashed=false")}` +
    "&fields=files(id,name,modifiedTime,size)";

  const resp = await driveAuthedFetch(url);
  if (!resp.ok) {
    const body = await driveReadErrorBody(resp);
    throw new Error(`Drive list failed (${resp.status}) ${body}`);
  }

  const data = await resp.json();
  const file = data?.files?.[0];
  return file || null;
}

async function driveCreateSaveFile(rawJson) {
  const boundary = "pokechill_boundary_" + Math.random().toString(16).slice(2);
  const metadata = {
    name: DRIVE_SAVE_FILENAME,
    parents: ["appDataFolder"],
    mimeType: "application/json",
  };

  const body =
    `--${boundary}\r\n` +
    "Content-Type: application/json; charset=UTF-8\r\n\r\n" +
    `${JSON.stringify(metadata)}\r\n` +
    `--${boundary}\r\n` +
    "Content-Type: application/json\r\n\r\n" +
    `${rawJson}\r\n` +
    `--${boundary}--`;

  const resp = await driveAuthedFetch(
    "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,modifiedTime",
    {
      method: "POST",
      headers: { "Content-Type": `multipart/related; boundary=${boundary}` },
      body,
    }
  );

  if (!resp.ok) {
    const bodyText = await driveReadErrorBody(resp);
    throw new Error(`Drive create failed (${resp.status}) ${bodyText}`);
  }
  return await resp.json();
}

async function driveUpdateSaveFile(fileId, rawJson) {
  const resp = await driveAuthedFetch(
    `https://www.googleapis.com/upload/drive/v3/files/${encodeURIComponent(fileId)}?uploadType=media&fields=id,modifiedTime`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: rawJson,
    }
  );

  if (!resp.ok) {
    const bodyText = await driveReadErrorBody(resp);
    throw new Error(`Drive update failed (${resp.status}) ${bodyText}`);
  }
  return await resp.json();
}

async function driveDownloadSaveFile(fileId) {
  const resp = await driveAuthedFetch(
    `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(fileId)}?alt=media`,
    { method: "GET" }
  );

  if (!resp.ok) {
    const bodyText = await driveReadErrorBody(resp);
    throw new Error(`Drive download failed (${resp.status}) ${bodyText}`);
  }
  return await resp.text();
}

async function driveSignIn() {
  if (!driveEnsureSdkReady()) return;

  try {
    await driveEnsureToken({ interactive: true });
    await driveFetchUserEmail();
    alert("Signed in. You can now Upload/Download your cloud save.");
  } catch (err) {
    console.error(err);
    alert(`Sign-in failed.\n\n${err?.message || err}`);
  }
}

function driveSignOut() {
  if (!driveAccessToken) {
    alert("Not signed in.");
    return;
  }

  const tokenToRevoke = driveAccessToken;
  driveAccessToken = null;
  driveAccessTokenExpiresAtMs = 0;

  try {
    google?.accounts?.oauth2?.revoke?.(tokenToRevoke, () => {});
  } catch (_) {}

  driveUserEmail = null;
  driveSetStatusLabel();
  drivePersistSession();
  alert("Signed out.");
}

async function driveUpload() {
  if (!driveEnsureSdkReady()) return;

  try {
    saveGame();

    const raw = exportToText();
    if (!raw) {
      alert("No local save found to upload.");
      return;
    }

    if (!driveUserEmail) {
      await driveFetchUserEmail().catch(() => {});
    }

    const localUpdatedAt = driveGetLocalUpdatedAt();
    const existing = await driveFindSaveFile();

    if (existing?.modifiedTime) {
      const msg =
        "Overwrite cloud save?\n\n" +
        `Cloud last update: ${existing.modifiedTime}\n` +
        (localUpdatedAt ? `Local last update: ${localUpdatedAt}\n` : "");
      if (!confirm(msg)) return;
      await driveUpdateSaveFile(existing.id, raw);
    } else {
      await driveCreateSaveFile(raw);
    }

    alert("Uploaded to Google Drive (cloud save updated).");
  } catch (err) {
    console.error(err);
    alert(`Upload failed.\n\n${err?.message || err}`);
  }
}

async function driveDownload() {
  if (!driveEnsureSdkReady()) return;

  try {
    const existing = await driveFindSaveFile();
    if (!existing) {
      alert("No cloud save found yet.");
      return;
    }

    if (!driveUserEmail) {
      await driveFetchUserEmail().catch(() => {});
    }

    const localUpdatedAt = driveGetLocalUpdatedAt();
    const msg =
      "Replace local save with cloud save?\n\n" +
      `Cloud last update: ${existing.modifiedTime || "unknown"}\n` +
      (localUpdatedAt ? `Local last update: ${localUpdatedAt}\n` : "");
    if (!confirm(msg)) return;

    const raw = await driveDownloadSaveFile(existing.id);
    JSON.parse(raw); // validate

    localStorage.setItem("gameData", raw);
    localStorage.setItem("gameDataUpdatedAt", new Date().toISOString());
    loadGame();
    window.location.reload();
  } catch (err) {
    console.error(err);
    alert(`Download failed.\n\n${err?.message || err}`);
  }
}

async function driveTryRestoreSession() {
  if (!driveIsConfigured()) return;
  // First: restore from sessionStorage (works on F5 in same tab).
  const restored = driveRestoreSessionFromStorage();

  const startMs = Date.now();
  const maxWaitMs = 10_000;

  const tick = async () => {
    // Wait for the GIS script to load (it's async/defer in index.html)
    if (!window.google?.accounts?.oauth2?.initTokenClient) {
      if (Date.now() - startMs < maxWaitMs) setTimeout(tick, 250);
      return;
    }

    // Silent token request: no popup, no consent prompt.
    try {
      await driveEnsureToken({ interactive: false, silent: true });
      await driveFetchUserEmail();
    } catch (_) {
      // Not signed in / no prior consent / third-party cookie restrictions, etc.
    }
  };

  // If we already restored a still-valid token, we can skip GIS silent auth,
  // but still try to re-fetch email if missing.
  if (restored && driveUserEmail) return;
  tick();
}

// Initialize label + attempt silent re-auth on refresh.
try {
  driveSetStatusLabel();
  window.addEventListener("load", () => {
    driveTryRestoreSession();
  });
} catch (_) {}
