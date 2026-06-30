# vacation-countdown

Small static app for GitHub Pages.

## What it does
- Counts only Monday to Friday.
- Removes Baden-Württemberg public holidays that fall on weekdays.
- Lets you enter a start date, target date, and custom label.
- Works fully client-side, so it is suitable for GitHub Pages.

## Included holiday data
The app includes Baden-Württemberg public holidays for 2025, 2026, and 2027.

## Publish on GitHub Pages
1. Create a new public repository.
2. Upload `countdown-working-days.html`.
3. Rename it to `index.html` if you want it as the default page.
4. In GitHub, open **Settings → Pages**.
5. Set the source to your main branch and root folder.
6. Save, then open the published URL.

## Notes
- Current logic excludes the start date and includes the target date if it is a valid working day.
- If you want more years, extend the `holidayMap` object in the script.
