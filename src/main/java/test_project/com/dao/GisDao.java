package test_project.com.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository(value = "gisDAO")
public class GisDao extends SqlSessionDaoSupport {
	@Autowired
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		super.setSqlSessionFactory(sqlSessionFactory);
	};
	
	/**
	 * 리스트 조회 처리 SQL mapping 을 실행한다.
	 *
	 * @param queryId - 리스트 조회 처리 SQL mapping 쿼리 ID
	 *
	 * @return 결과 List 객체 - SQL mapping 파일에서 지정한  resultType/resultMap 에 의한 결과 객체(보통 VO 또는 Map)의 List
	 */
	public <E> List<E> selectList(String queryId) {
		return getSqlSession().selectList(queryId);
	}

}
