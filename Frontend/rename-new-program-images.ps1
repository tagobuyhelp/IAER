$ErrorActionPreference = 'Stop'

$folder = 'g:\Development\IAER\Frontend\public\images\programs\New-Programs'

$alias = @{
  '804A6850' = '8O4A6850'
  'Gemini_Generated_Image_zi0pz3izop3zi2o' = 'Gemini_Generated_Image_zi2op3zi2op3zi2o'
  'Gemini_Generated_Image_zi0pz3izop3zi2o (1)' = 'Gemini_Generated_Image_zi2op3zi2op3zi2o (1)'
  'Gemini_Generated_Image_8nh7718nh7718nh77 (1)' = 'Gemini_Generated_Image_8nh7718nh7718nh7 (1)'
  'Gemini_Generated_Image_we21bqw21bqwe21' = 'Gemini_Generated_Image_we21bqwe21bqwe21'
  'Gemini_Generated_Image_wdkf89wkdf89wkdf' = 'Gemini_Generated_Image_wkdf89wkdf89wkdf'
  'Gemini_Generated_Image_zabnuxzabnuxabn' = 'Gemini_Generated_Image_zabnuxzabnuxzabn'
  'Gemini_Generated_Image_zabnuxzabnuxabn (1)' = 'Gemini_Generated_Image_zabnuxzabnuxzabn (1)'
  'Gemini_Generated_Image_ojilc5ojilc5ojilc' = 'Gemini_Generated_Image_ojllc5ojllc5ojll'
  'Gemini_Generated_Image_vzibuvzibuvzibuv' = 'Gemini_Generated_Image_vvzibuvvzibuvvzi'
  'Gemini_Generated_Image_3zxvg3zxvg3zxvg' = 'Gemini_Generated_Image_3z3xvg3z3xvg3z3x'
  'Gemini_Generated_Image_pkmikdpkmikdpkm' = 'Gemini_Generated_Image_pkmikdpkmikdpkmi'
  'Gemini_Generated_Image_dpju0qdpju0qdpj' = 'Gemini_Generated_Image_dpju0qdpju0qdpju'
  'Gemini_Generated_Image_av9rqsav9rqsav9' = 'Gemini_Generated_Image_av9rqsav9rqsav9r'
  'Gemini_Generated_Image_dhtd66dhtd66dht' = 'Gemini_Generated_Image_dhdt66dhdt66dhdt'
  'Gemini_Generated_Image_dhtd66dhtd66dht (1)' = 'Gemini_Generated_Image_dhdt66dhdt66dhdt (1)'
  'Gemini_Generated_Image_5qqyw5qqyw5qqy' = 'Gemini_Generated_Image_5qqryw5qqryw5qqr'
  'Gemini_Generated_Image_5qqyw5qqyw5qqy (1)' = 'Gemini_Generated_Image_5qqryw5qqryw5qqr (1)'
}

$mapping = @(
  @{ Source = 'DSC_3150'; TargetBase = 'bba-in-global-business-banner' },
  @{ Source = 'ChatGPT Image Apr 23, 2026, 11_31_35 AM'; TargetBase = 'bba-in-global-business-overview' },
  @{ Source = 'ChatGPT Image Apr 23, 2026, 11_25_18 AM'; TargetBase = 'bba-in-global-business-curriculum' },
  @{ Source = 'ChatGPT Image Apr 23, 2026, 11_20_51 AM'; TargetBase = 'bba-in-global-business-careers' },

  @{ Source = 'ChatGPT Image Apr 23, 2026, 11_11_17 AM'; TargetBase = 'bba-in-business-analytics-banner' },
  @{ Source = 'ChatGPT Image Apr 23, 2026, 11_08_36 AM'; TargetBase = 'bba-in-business-analytics-overview' },
  @{ Source = 'ChatGPT Image Apr 23, 2026, 11_06_11 AM'; TargetBase = 'bba-in-business-analytics-curriculum' },
  @{ Source = 'Apr 23, 2026, 11_01_28 AM'; TargetBase = 'bba-in-business-analytics-careers' },

  @{ Source = 'Gemini_Generated_Image_zi0pz3izop3zi2o (1)'; TargetBase = 'bba-in-sports-management-banner' },
  @{ Source = 'Gemini_Generated_Image_itkzgritkzgritkz (1)'; TargetBase = 'bba-in-sports-management-overview' },
  @{ Source = 'Gemini_Generated_Image_8nh7718nh7718nh77 (1)'; TargetBase = 'bba-in-sports-management-curriculum' },
  @{ Source = 'Gemini_Generated_Image_zabnuxzabnuxabn (1)'; TargetBase = 'bba-in-sports-management-careers' },

  @{ Source = 'Gemini_Generated_Image_nh67finh67finh67 (1)'; TargetBase = 'bba-in-hotel-hospitality-administration-banner' },
  @{ Source = 'Gemini_Generated_Image_9ozlpr9ozlpr9ozl (1)'; TargetBase = 'bba-in-hotel-hospitality-administration-overview' },
  @{ Source = 'Gemini_Generated_Image_dhtd66dhtd66dht (1)'; TargetBase = 'bba-in-hotel-hospitality-administration-curriculum' },
  @{ Source = 'Gemini_Generated_Image_5qqyw5qqyw5qqy (1)'; TargetBase = 'bba-in-hotel-hospitality-administration-careers' },

  @{ Source = 'File 243'; TargetBase = 'bca-in-ai-ml-banner' },
  @{ Source = 'File 480'; TargetBase = 'bca-in-ai-ml-overview' },
  @{ Source = 'File 277'; TargetBase = 'bca-in-ai-ml-curriculum' },
  @{ Source = 'File 411'; TargetBase = 'bca-in-ai-ml-careers' },

  @{ Source = 'IMG_3866'; TargetBase = 'bca-in-data-science-cyber-security-banner' },
  @{ Source = 'UOKK9145'; TargetBase = 'bca-in-data-science-cyber-security-overview' },
  @{ Source = 'IMG_2792'; TargetBase = 'bca-in-data-science-cyber-security-curriculum' },
  @{ Source = 'IMG_2620'; TargetBase = 'bca-in-data-science-cyber-security-careers' },

  @{ Source = 'Gemini_Generated_Image_we21bqw21bqwe21'; TargetBase = 'diploma-in-aviation-hospitality-management-banner' },
  @{ Source = 'Gemini_Generated_Image_pkmikdpkmikdpkm'; TargetBase = 'diploma-in-aviation-hospitality-management-overview' },
  @{ Source = 'DSC_2350'; TargetBase = 'diploma-in-aviation-hospitality-management-curriculum' },
  @{ Source = 'Gemini_Generated_Image_dpju0qdpju0qdpj'; TargetBase = 'diploma-in-aviation-hospitality-management-careers' },

  @{ Source = 'DSC_2340'; TargetBase = 'diploma-in-medical-laboratory-technology-banner' },
  @{ Source = '20211203_133341'; TargetBase = 'diploma-in-medical-laboratory-technology-overview' },
  @{ Source = 'DSC_3287'; TargetBase = 'diploma-in-medical-laboratory-technology-curriculum' },
  @{ Source = 'Gemini_Generated_Image_ojilc5ojilc5ojilc'; TargetBase = 'diploma-in-medical-laboratory-technology-careers' },

  @{ Source = 'Gemini_Generated_Image_av9rqsav9rqsav9'; TargetBase = 'advanced-certification-in-agentic-ai-banner' },
  @{ Source = 'Gemini_Generated_Image_vzibuvzibuvzibuv'; TargetBase = 'advanced-certification-in-agentic-ai-overview' },
  @{ Source = 'Gemini_Generated_Image_wdkf89wkdf89wkdf'; TargetBase = 'advanced-certification-in-agentic-ai-curriculum' },
  @{ Source = 'Gemini_Generated_Image_ojyok6ojyok6ojyo'; TargetBase = 'advanced-certification-in-agentic-ai-careers' },

  @{ Source = 'Gemini_Generated_Image_cuho67cuho67cuho'; TargetBase = 'advanced-certification-in-full-stack-development-banner' },
  @{ Source = 'ChatGPT Image Apr 16, 2026, 04_48_44 PM'; TargetBase = 'advanced-certification-in-full-stack-development-overview' },
  @{ Source = 'Gemini_Generated_Image_3zxvg3zxvg3zxvg'; TargetBase = 'advanced-certification-in-full-stack-development-curriculum' },
  @{ Source = 'Gemini_Generated_Image_cpkmxrcpkmxrcpkm'; TargetBase = 'advanced-certification-in-full-stack-development-careers' },

  @{ Source = 'IMG_2872'; TargetBase = 'advanced-certification-in-software-development-banner' },
  @{ Source = 'IMG_2594'; TargetBase = 'advanced-certification-in-software-development-overview' },
  @{ Source = 'IMG_3165'; TargetBase = 'advanced-certification-in-software-development-curriculum' },
  @{ Source = 'IMG_3587'; TargetBase = 'advanced-certification-in-software-development-careers' },

  @{ Source = 'Gemini_Generated_Image_zi0pz3izop3zi2o'; TargetBase = 'advanced-certification-in-aviation-cabin-crew-banner' },
  @{ Source = 'Gemini_Generated_Image_itkzgritkzgritkz'; TargetBase = 'advanced-certification-in-aviation-cabin-crew-overview' },
  @{ Source = 'Gemini_Generated_Image_8nh7718nh7718nh7'; TargetBase = 'advanced-certification-in-aviation-cabin-crew-curriculum' },
  @{ Source = 'Gemini_Generated_Image_zabnuxzabnuxabn'; TargetBase = 'advanced-certification-in-aviation-cabin-crew-careers' },

  @{ Source = 'Gemini_Generated_Image_nh67finh67finh67'; TargetBase = 'master-of-hospital-administration-banner' },
  @{ Source = 'Gemini_Generated_Image_9ozlpr9ozlpr9ozl'; TargetBase = 'master-of-hospital-administration-overview' },
  @{ Source = 'Gemini_Generated_Image_dhtd66dhtd66dht'; TargetBase = 'master-of-hospital-administration-curriculum' },
  @{ Source = 'Gemini_Generated_Image_5qqyw5qqyw5qqy'; TargetBase = 'master-of-hospital-administration-careers' },

  @{ Source = 'School of Hospitality'; TargetBase = 'bca-banner' },
  @{ Source = 'File 264'; TargetBase = 'bca-overview' },
  @{ Source = 'File 405'; TargetBase = 'bca-curriculum' },
  @{ Source = 'File 253 (1)'; TargetBase = 'bca-careers' },

  @{ Source = 'ChatGPT Image Apr 18, 2026, 05_24_39 PM'; TargetBase = 'bsc-in-medical-laboratory-technology-bmlt-banner' },
  @{ Source = 'ChatGPT Image Apr 18, 2026, 05_35_59 PM'; TargetBase = 'bsc-in-medical-laboratory-technology-bmlt-overview' },
  @{ Source = '804A6850'; TargetBase = 'bsc-in-medical-laboratory-technology-bmlt-curriculum' },
  @{ Source = 'DSC_1621'; TargetBase = 'bsc-in-medical-laboratory-technology-bmlt-careers' },

  @{ Source = 'DSC_3265'; TargetBase = 'bba-in-business-analytics-banner' },
  @{ Source = 'DSC_2255'; TargetBase = 'bba-in-business-analytics-overview' },
  @{ Source = 'KX2A3102'; TargetBase = 'bba-in-business-analytics-curriculum' },
  @{ Source = 'KX2A3187'; TargetBase = 'bba-in-business-analytics-careers' }
)

function Get-SingleMatch([string]$sourceKey) {
  if ($alias.ContainsKey($sourceKey)) { $sourceKey = $alias[$sourceKey] }

  $items = Get-ChildItem -LiteralPath $folder -File

  $exact = $items | Where-Object { $_.Name -ieq $sourceKey }
  if ($exact.Count -eq 1) { return $exact[0] }
  if ($exact.Count -gt 1) { throw "Ambiguous source '$sourceKey' (exact filename)" }

  $baseExact = $items | Where-Object { $_.BaseName -ieq $sourceKey }
  if ($baseExact.Count -eq 1) { return $baseExact[0] }
  if ($baseExact.Count -gt 1) { throw "Ambiguous source '$sourceKey' (basename)" }

  $starts = $items | Where-Object { $_.BaseName -ilike "$sourceKey*" }
  if ($starts.Count -eq 1) { return $starts[0] }
  if ($starts.Count -gt 1) { throw "Ambiguous source '$sourceKey' (startswith): $($starts.Name -join ', ')" }

  return $null
}

$timestamp = Get-Date -Format 'yyyyMMddHHmmss'
$renamed = 0
$backups = 0

foreach ($m in $mapping) {
  $src = Get-SingleMatch $m.Source
  if (-not $src) { throw "Missing source: $($m.Source)" }

  $targetName = "$($m.TargetBase)$($src.Extension)"
  $targetPath = Join-Path $folder $targetName

  if (Test-Path -LiteralPath $targetPath) {
    $existing = Get-Item -LiteralPath $targetPath
    $backupName = "$($existing.BaseName)-backup-$timestamp$($existing.Extension)"
    $backupPath = Join-Path $folder $backupName
    if (Test-Path -LiteralPath $backupPath) { throw "Backup already exists: $backupName" }
    Rename-Item -LiteralPath $existing.FullName -NewName $backupName
    $backups++
  }

  Rename-Item -LiteralPath $src.FullName -NewName $targetName
  $renamed++
}

Write-Output "Updated filenames: $renamed. Backups created: $backups."
