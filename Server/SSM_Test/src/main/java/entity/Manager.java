package entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @projectName: SSM
 * @package: entity
 * @className: Manager
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/20/2023 12:59 PM
 * @version: 1.0
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Manager {

    private String m_id;

    private String m_password;

    private String m_name;

    private String m_position;
}
