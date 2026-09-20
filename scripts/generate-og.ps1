# Regenerate the social preview image from the site's editorial brand palette.
Add-Type -AssemblyName System.Drawing

$bitmap = [System.Drawing.Bitmap]::new(1200, 630)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$background = [System.Drawing.ColorTranslator]::FromHtml('#25251f')
$cream = [System.Drawing.ColorTranslator]::FromHtml('#f8f4ed')
$gold = [System.Drawing.ColorTranslator]::FromHtml('#c8b393')
$graphics.Clear($background)
$borderPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(95, 200, 179, 147), 1)
$graphics.DrawLine($borderPen, 95, 87, 1105, 87)
$graphics.DrawLine($borderPen, 95, 540, 1105, 540)
$graphics.DrawEllipse($borderPen, 790, -220, 620, 620)
$graphics.DrawEllipse($borderPen, 780, 150, 700, 700)
$serif = [System.Drawing.Font]::new('Georgia', 88, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$subtitle = [System.Drawing.Font]::new('Arial', 28, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$tagline = [System.Drawing.Font]::new('Georgia', 38, [System.Drawing.FontStyle]::Italic, [System.Drawing.GraphicsUnit]::Pixel)
$creamBrush = [System.Drawing.SolidBrush]::new($cream)
$goldBrush = [System.Drawing.SolidBrush]::new($gold)
$graphics.DrawString('ZIRAR FOCUS', $serif, $creamBrush, 95, 209)
$separator = [char]0x00B7
$graphics.DrawString(("PHOTO & FILM  {0}  AVIGNON" -f $separator), $subtitle, $goldBrush, 100, 345)
$graphics.DrawString('Vos instants, pour toujours.', $tagline, $creamBrush, 100, 454)
$bitmap.Save((Join-Path $PSScriptRoot '..\public\og-image.png'), [System.Drawing.Imaging.ImageFormat]::Png)
$goldBrush.Dispose(); $creamBrush.Dispose(); $tagline.Dispose(); $subtitle.Dispose(); $serif.Dispose(); $borderPen.Dispose(); $graphics.Dispose(); $bitmap.Dispose()
