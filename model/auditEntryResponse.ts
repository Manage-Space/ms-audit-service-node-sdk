/**
 * ManageSpace Audit API
 * ManageSpace Audit API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class AuditEntryResponse {
    /**
    * Organization Id
    */
    'orgId': string;
    /**
    * Site Id
    */
    'siteId'?: string;
    /**
    * User Id
    */
    'userId': string;
    /**
    * Description of the Audit Entry.
    */
    'description': string;
    /**
    * The service that produced the Audit Entry.
    */
    'source'?: string;
    /**
    * ID of the affected Entity.
    */
    'entityId'?: string;
    /**
    * The type of the affected Entity.
    */
    'entityType'?: string;
    /**
    * The date the change was made.
    */
    'date': Date;
    /**
    * The type of operation that happened on the affected Entity.
    */
    'operationType'?: string;
    /**
    * Any additional data relating to the Audit Entry.
    */
    'metaData'?: object;
    /**
    * The state of the entity before the operation was performed.
    */
    'dataBefore'?: object;
    /**
    * The state of the entity after the operation was performed.
    */
    'dataAfter'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "orgId",
            "baseName": "orgId",
            "type": "string"
        },
        {
            "name": "siteId",
            "baseName": "siteId",
            "type": "string"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "entityId",
            "baseName": "entityId",
            "type": "string"
        },
        {
            "name": "entityType",
            "baseName": "entityType",
            "type": "string"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date"
        },
        {
            "name": "operationType",
            "baseName": "operationType",
            "type": "string"
        },
        {
            "name": "metaData",
            "baseName": "metaData",
            "type": "object"
        },
        {
            "name": "dataBefore",
            "baseName": "dataBefore",
            "type": "object"
        },
        {
            "name": "dataAfter",
            "baseName": "dataAfter",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return AuditEntryResponse.attributeTypeMap;
    }
}
