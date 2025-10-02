git up
npm run build
cp dist/* /var/www/zubbaenergy/ -r
sudo systemctl reload nginx