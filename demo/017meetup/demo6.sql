SELECT COUNT(*) FROM students
    LEFT JOIN courses USING courseid
    LEFT JOIN schools ON students.schoolid = schools.schoolid
    WHERE courseid > 3
    GROUP BY schools.schoolid, courses.courseid
    ORDER BY courseid DESC, schoolid
