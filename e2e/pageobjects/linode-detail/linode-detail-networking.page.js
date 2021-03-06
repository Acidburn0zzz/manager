const { constants } = require('../../constants');

import Page from '../page';

class Networking extends Page {
    get heading() { return $('[data-qa-title]'); }
    get ipv4Subheading() { return $('[data-qa-ipv4-subheading]'); }
    get ipv6Subheading() { return $('[data-qa-ipv6-subheading]'); }
    get drawerTitle() { return $('[data-qa-drawer-title]'); }
    get ips() { return $$('[data-qa-ip]'); }
    get ip() {return $('[data-qa-ip]'); }
    get rdns() { return $('[data-qa-rdns]'); }
    get type() { return $('[data-qa-type]'); }
    get actionMenu() { return $('[data-qa-action-menu]'); }
    get addIcons() { return $$('[data-qa-icon-text-link]'); }
    get viewButton() { return $('[data-qa-action]'); }

    // drawer elements
    get serviceNotice() { return $('[data-qa-service-notice]'); }
    get allocate() { return $('[data-qa-submit]'); }
    get submit() { return $('[data-qa-submit]'); }
    get cancel() { return $('[data-qa-cancel]'); }

    // view ip elements
    get configIpHeading() { return $('[data-qa-ip-address-heading]'); }
    get configIp() { return $('[data-qa-ip-address-heading] [data-qa-ip-address]'); }
    get configSubnetHeading() { return $('[data-qa-subnet-heading]'); }
    get configSubnet() { return $('[data-qa-subnet-heading] [data-qa-subnet]'); }
    get configGatewayHeading() { return $('[data-qa-gateway-heading]'); }
    get configGateway() { return $('[data-qa-gateway-heading] [data-qa-gateway]'); }
    get configTypeHeading() { return $('[data-qa-type-heading]'); }
    get configType() { return $('[data-qa-type-heading] [data-qa-type]'); }
    get configPublicHeading() { return $('[data-qa-public-heading]'); }
    get configPublic() { return $('[data-qa-public-heading] [data-qa-public]'); }
    get configRdnsHeading() { return $('[data-qa-rdns-heading]'); }
    get configRdns() { return $('[data-qa-rdns-heading] [data-qa-rdns]'); }
    get configRegionHeading() { return $('[data-qa-region-heading]'); }
    get configRegion() { return $('[data-qa-region-heading] [data-qa-region]'); }

    get domainName() { return $('[data-qa-domain-name]'); }
    get lookupError() { return $('[data-qa-error]'); }

    landingElemsDisplay() {
        expect(this.heading.getText()).toBe('Networking');
        expect(this.ipv4Subheading.getText()).toBe('IPv4');
        expect(this.ipv6Subheading.getText()).toBe('IPv6');
        expect(this.ips.length).toBeGreaterThan(0);

        // IPv4 Elems display

        // IPv6 Elems display
    }

    getIpsByType(ipType) {
        const regex = {
            ipv4: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g,
            ipv6: /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/,
        }
        return this.ips.filter(ip => !!ip.getAttribute('data-qa-ip').match(regex[ipType]));
    }

    viewConfiguration(ip, type) {
        const tableElem = $(`[data-qa-ip="${ip}"]`);

        if (type === 'Link Local') {
            tableElem.$(this.viewButton.selector).click();
            this.drawerTitle.waitForVisible();
            return;
        }

        this.selectActionMenuItem(ip, 'View');
        this.drawerTitle.waitForVisible();
    }

    ipDetailsDisplay(ipType) {
        const ipv4Regex = 
            /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g;

        const ipv6Regex =
            /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/;

        this.drawerTitle.waitForVisible();

        expect(this.drawerTitle.getText()).toBe('Details for IP');
        expect(this.configIpHeading.getText()).toContain('Address');
        expect(this.configGatewayHeading.getText()).toContain('Gateway');
        expect(this.configSubnetHeading.getText()).toContain('Subnet Mask');
        expect(this.configTypeHeading.getText()).toContain('Type');
        expect(this.configType.getText()).toBe(ipType);
        expect(this.configPublicHeading.getText()).toContain('Public');
        expect(this.configPublic.isVisible()).toBe(true);
        expect(this.configRegionHeading.getText()).toContain('Region');
        expect(this.configRegion.isVisible()).toBe(true);

        if (ipType === 'ipv4') {
            expect(this.configIp.getText()).toMatch(ipv4Regex);
            expect(this.configGateway.getText()).toMatch(ipv4Regex);
        }
        if (ipType === 'ipv6') {
            expect(this.configIp.getText()).toMatch(ipv6Regex);
            expect(this.configGateway.getText()).toMatch(ipv6Regex);
        }
    }

    addIp(ipType) {
        if (ipType === 'ipv4') {
            browser.click('[data-qa-icon-text-link="Add Public IPv4"]');
            this.drawerTitle.waitForVisible();
        }

        if (ipType === 'ipv6') {
            browser.click('[data-qa-icon-text-link="Add IPv6"]');
            this.drawerTitle.waitForVisible();
        }
    }

    addIpElemsDisplay(ipType) {
        if (ipType === 'ipv4') {
            expect(this.drawerTitle.getText()).toBe('Allocate Public IPv4 Address');
            expect(this.serviceNotice.isVisible()).toBe(true);
            expect(this.allocate.isVisible()).toBe(true);
        }
        if (ipType === 'ipv6') {
            expect(this.drawerTitle.getText()).toBe('Allocate IPv6 Ranges')
        }
        expect(this.cancel.isVisible()).toBe(true);
        expect(this.serviceNotice.getText()).toMatch(/\w/ig)

    }

    selectActionMenuItem(ip, item) {
        const menuItem = `[data-qa-action-menu-item="${item}"]`;
        
        browser.click(`[data-qa-ip="${ip}"] [data-qa-action-menu]`);
        browser.waitForVisible(menuItem);
        browser.click(menuItem)
        browser.waitForVisible(menuItem, constants.wait.normal, true);
    }

    editRdns(ip) {
        this.selectActionMenuItem(ip, 'Edit RDNS');
        this.drawerTitle.waitForVisible();
    }

    editRdnsElemsDisplay() {
        expect(this.drawerTitle.getText()).toBe('Edit Reverse DNS');
        expect(this.domainName.isVisible()).toBe(true)
        expect(this.domainName.$('input').getAttribute('placeholder')).toBe('Enter a domain name');
        expect(this.submit.isVisible()).toBe(true);
        expect(this.cancel.isVisible()).toBe(true);
    }

    delete(ip) {
        // not implemented yet
    }
}

export default new Networking();
